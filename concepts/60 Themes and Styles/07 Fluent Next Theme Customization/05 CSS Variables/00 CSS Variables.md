Fluent Next themes ship with CSS variables defined in the DevExpress Design System. Refer to the following help topics for additional information about key styling principles and a list of available CSS variables:

- [Colors](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables)
- [Typography](https://docs.devexpress.com/DesignSystem/405635/typography)
- [Spacing](https://docs.devexpress.com/DesignSystem/405633/spacing)
- [Borders](https://docs.devexpress.com/DesignSystem/405632/border)
- [Opacity](https://docs.devexpress.com/DesignSystem/405634/opacity)
- [Shadows](https://docs.devexpress.com/DesignSystem/405690/shadows)

You can apply these variables to custom elements to ensure a consistent look across your application. The following example uses Design System variables for rest and hover element states:

    <!-- tab: CSS -->
    .info-card {
        /* Surface and content colors */
        background-color: var(--dxds-color-surface-neutral-default-rest);
        color: var(--dxds-color-content-neutral-default-rest);

        /* Spacing */
        padding: var(--dxds-spacing-240);
        margin-bottom: var(--dxds-spacing-160);

        /* Borders */
        border: var(--dxds-border-width-10) solid var(--dxds-color-border-neutral-default-rest);
        border-radius: var(--dxds-border-radius-40);

        /* Typography */
        font-size: var(--dxds-font-size-base-md);
        line-height: var(--dxds-line-height-base-md);

        /* Shadow */
        box-shadow: var(--dxds-box-shadow-sm);
    }

    .info-card:hover {
        background-color: var(--dxds-color-surface-neutral-default-hovered);
        border-color: var(--dxds-color-border-neutral-default-hovered);
    }

CSS variable overrides also allow you to modify styles of DevExtreme components. You can define overrides for individual components or wrap multiple components in a container and define overrides on the container level. This allows you to apply unique styles to different parts of your application. For instance, you can use the following [semantic variable](https://docs.devexpress.com/DesignSystem/405706/colors/color-css-variables) overrides to apply dark mode styles to parts of a light mode application:

    <!-- tab: CSS -->
    /* Using dxds variables */
    .dark-colors-dx {
        --dxds-color-surface-neutral-default-rest: var(--dxds-color-surface-neutral-default-inverted-rest);
        --dxds-color-content-neutral-default-rest: var(--dxds-color-content-neutral-default-inverted-rest);
        --dxds-color-border-neutral-default-rest: var(--dxds-color-border-neutral-default-inverted-rest);
    }

    /* Using custom colors */
    .dark-colors-custom {
        --dxds-color-surface-neutral-default-rest: #341A51;
        --dxds-color-content-neutral-default-rest: #F5F0FA;
        --dxds-color-border-neutral-default-rest: #532982;
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
Components that include **wrapperAttr** properties allow you to add selectors that define variable overrides to overlay wrappers:

    ---

    ##### jQuery

        <!-- tab: index.js -->
        $("#popup").dxPopup({
            wrapperAttr: {
                class: "dark-colors-custom"
            }
        });

    ##### Angular

        <!-- tab: app.component.html-->
        <dx-popup
            [wrapperAttr]="popupWrapperAttr"
        ></dx-popup>

        <!-- tab: app.component.ts -->
        import { Component } from '@angular/core';

        @Component({
            imports: [DxPopupModule, /* ... */],
        })
        export class AppComponent {
            popupWrapperAttr = { class: 'dark-colors-custom' };
        }

    ##### Vue

        <!-- tab: App.vue -->
        <template>
            <DxPopup
                :wrapper-attr="popupWrapperAttr"
            />
        </template>

        <script setup lang="ts">
        import { DxPopup } from 'devextreme-vue/popup';

        const popupWrapperAttr = { class: 'dark-colors-custom' };
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { Popup } from 'devextreme-react/popup';

        const popupWrapperAttr = { class: 'dark-colors-custom' };

        export default function App() {
            return (
                <Popup
                    wrapperAttr={popupWrapperAttr}
                />
            );
        }

    ---

[/note]

You can also use CSS variable overrides to apply custom colors to specific parts of your application. You can define custom colors or use [utility palette](https://docs.devexpress.com/DesignSystem/405639/colors/utility-palettes/fluent-utility-palette) colors:

    <!-- tab: CSS -->
    /* Utility palette colors */
    .yellow-accent {
        --dxds-color-surface-primary-default-rest: var(--dxds-utility-yellow-40);
        --dxds-color-content-primary-default-rest: var(--dxds-utility-yellow-50);
        --dxds-color-border-primary-default-rest: var(--dxds-utility-yellow-60);
    }

    /* Custom colors */
    .yellow-accent {
        --dxds-color-surface-primary-default-rest: #F2C661;
        --dxds-color-content-primary-default-rest: #EFB839;
        --dxds-color-border-primary-default-rest: #EDAD1C;
    }
