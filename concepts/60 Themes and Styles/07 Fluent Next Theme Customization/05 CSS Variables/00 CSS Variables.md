Fluent Next themes ship with CSS variables defined in the DevExpress Design System. Refer to the following help topics for additional information about key styling principles and a list of available CSS variables:

- [Colors](https://docs.devexpress.com/DesignSystem/405637/colors)
    - [Theme Palettes](https://docs.devexpress.com/DesignSystem/405686/colors/theme-palettes)
    - [Utility Palettes](https://docs.devexpress.com/DesignSystem/405687/colors/utility-palettes)
    - [Semantic Color Variables](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables)
- [Typography](https://docs.devexpress.com/DesignSystem/405635/typography)
- [Spacing](https://docs.devexpress.com/DesignSystem/405633/spacing)
- [Borders](https://docs.devexpress.com/DesignSystem/405632/border)
- [Opacity](https://docs.devexpress.com/DesignSystem/405634/opacity)
- [Shadows](https://docs.devexpress.com/DesignSystem/405690/shadows)

You can apply these variables to custom elements to ensure a consistent look across your application. The following example uses Design System variables for rest and hover element states:

    <!-- tab: CSS -->
    .info-card {
        /* Surface and content colors */
        background-color: var(--dxds-color-bg);
        color: var(--dxds-color-content);

        /* Spacing */
        padding: var(--dxds-spacing-240);
        margin-bottom: var(--dxds-spacing-160);

        /* Borders */
        border: var(--dxds-border-width-10) solid var(--dxds-color-border);
        border-radius: var(--dxds-border-radius-40);

        /* Typography */
        font-size: var(--dxds-font-size-base-md);
        line-height: var(--dxds-line-height-base-md);

        /* Shadow */
        box-shadow: var(--dxds-box-shadow-sm);
    }

    .info-card:hover {
        background-color: var(--dxds-color-bg-hovered);
        border-color: var(--dxds-color-border-hovered);
    }

To override variables for an entire page, use the `:root` selector:

    <!-- tab: CSS -->
    :root {
        --dxds-color-bg-primary: #b06ab3;
    }

[note] `:root` overrides and Fluent Next stylesheets share the same specificity. Load your override stylesheet after the Fluent Next stylesheet to apply these styles. Scoped overrides that use class or ID selectors apply regardless of load order.

CSS variable overrides also allow you to modify styles of DevExtreme components. You can define overrides for individual components or wrap multiple components in a container and define overrides on the container level. This allows you to apply unique styles to different parts of your application. The following code snippet overrides [semantic variables](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables):

    <!-- tab: CSS -->
    /* Using dxds variables */
    .custom-colors-var {
        --dxds-color-bg: var(--dxds-color-bg-inverted);
        --dxds-color-content: var(--dxds-color-content-inverted);
        --dxds-color-border: var(--dxds-color-border-inverted);
    }

    /* Using custom colors */
    .custom-colors-hex {
        --dxds-color-bg: #341A51;
        --dxds-color-content: #F5F0FA;
        --dxds-color-border: #532982;
    }

[note]

Components that display content in overlays do not apply component element styles to the overlay content. Use one of the following approaches to apply styles to the overlay content:

1. **Use a `.dx-swatch-*` Component Container**    
    If you initialize an overlay component in a container with a `dx-swatch-*` class, DevExtreme nests the component's overlay wrapper in a container with the same `dx-swatch-*` class. Use this class in your override definitions to style the overlay content.    

    ---

    ##### jQuery

        <!-- tab: index.html -->
        <html>
            <!-- ... -->
            <body class="dx-viewport">
                <div class="dx-swatch-myswatch">
                    <div id="popup"></div> <!-- Styles defined for .dx-swatch-myswatch will apply to the Popup content -->
                </div>
            </body>
        </html>

        <!-- tab: index.js -->
        $('#popup').dxPopup({
            // ...
        });

    ##### Angular

        <!-- tab: app.component.html -->
        <div class="dx-swatch-myswatch">
            <dx-popup></dx-popup> <!-- Styles defined for .dx-swatch-myswatch will apply to the Popup content -->
        </div>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            imports: [DxPopupModule, /* ... */],
        })
        export class AppComponent {
            // ...
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <div class="dx-swatch-myswatch">
                <DxPopup /> <!-- Styles defined for .dx-swatch-myswatch will apply to the Popup content -->
            </div>
        </template>

        <script setup lang="ts">
        import { DxPopup } from 'devextreme-vue/popup';

        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { Popup } from 'devextreme-react/popup';

        export default function App() {
            return (
                <div className="dx-swatch-myswatch">
                    <Popup /> {/* Styles defined for .dx-swatch-myswatch will apply to the Popup content */}
                </div>
            );
        }

    ---

    Note that DevExtreme does not generate `.dx-swatch-*` wrapper containers for components where the **container** property is defined.

2. **Use wrapperAttr Properties**    
    You can define the following properties to add selector attributes to component overlay wrappers:
    - **wrapperAttr**: Specify this property in overlay components (Popup, Popover, Toast, LoadPanel).
    - **dropDownOptions**.**wrapperAttr**: Specify this property in editors that display drop-downs (SelectBox, Lookup, DateBox, ColorBox, DropDownBox, DropDownButton, Autocomplete).

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $("#popup").dxPopup({
            wrapperAttr: {
                class: "dark-colors-custom",
            },
        });

        $("#selectBox").dxSelectBox({
            dropDownOptions: {
                wrapperAttr: {
                    class: "dark-colors-custom",
                },
            },
        });

    ##### Angular

        <!-- tab: app.component.html-->
        <dx-popup
            [wrapperAttr]="wrapperAttr"
        ></dx-popup>
        <dx-select-box>
            <dxo-select-box-drop-down-options
                [wrapperAttr]="wrapperAttr"
            ></dxo-select-box-drop-down-options>
        </dx-select-box>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';
        import { DxPopupModule, DxSelectBoxModule } from 'devextreme-angular';

        @Component({
            imports: [DxPopupModule, DxSelectBoxModule, /* ... */],
        })
        export class AppComponent {
            wrapperAttr = {
                class: 'dark-colors-custom',
            };
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxPopup
                :wrapper-attr="wrapperAttr"
            />
            <DxSelectBox>
                <DxDropDownOptions
                    :wrapper-attr="wrapperAttr"
                />
            </DxSelectBox>
        </template>

        <script setup lang="ts">
        import { DxPopup } from 'devextreme-vue/popup';
        import { DxSelectBox, DxDropDownOptions } from 'devextreme-vue/select-box';

        const wrapperAttr = {
            class: 'dark-colors-custom',
        };
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { Popup } from 'devextreme-react/popup';
        import { SelectBox, DropDownOptions } from 'devextreme-react/select-box';

        const wrapperAttr = {
            class: 'dark-colors-custom',
        };

        export default function App() {
            return (
                <>
                    <Popup
                        wrapperAttr={wrapperAttr}
                    />
                    <SelectBox>
                        <DropDownOptions
                            wrapperAttr={wrapperAttr}
                        />
                    </SelectBox>
                </>
            );
        }

    ---

[/note]

You can also use CSS variable overrides to apply custom colors to specific parts of your application. You can define custom colors or use [utility palette](https://docs.devexpress.com/DesignSystem/405639/colors/utility-palettes/fluent-utility-palette) colors:

    <!-- tab: CSS -->
    /* Utility palette colors */
    .yellow-accent {
        --dxds-color-bg: var(--dxds-color-bg-yellow);
        --dxds-color-content: var(--dxds-color-content-yellow);
        --dxds-color-border: var(--dxds-color-border-yellow);
    }

    /* Custom colors */
    .yellow-accent {
        --dxds-color-bg: #F2C661;
        --dxds-color-content: #EFB839;
        --dxds-color-border: #EDAD1C;
    }
