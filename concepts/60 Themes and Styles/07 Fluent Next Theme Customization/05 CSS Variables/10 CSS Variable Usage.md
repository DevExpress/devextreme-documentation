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
        import { DxPopupModule } from 'devextreme-angular';

        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
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
                class: "custom-colors-hex",
            },
        });

        $("#selectBox").dxSelectBox({
            dropDownOptions: {
                wrapperAttr: {
                    class: "custom-colors-hex",
                },
            },
        });

    ##### Angular

        <!-- tab: app.component.html -->
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
            selector: 'app-root',
            templateUrl: './app.component.html',
            imports: [DxPopupModule, DxSelectBoxModule, /* ... */],
        })
        export class AppComponent {
            wrapperAttr = {
                class: 'custom-colors-hex',
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
            class: 'custom-colors-hex',
        };
        </script>

    ##### React

        <!-- tab: App.tsx -->
        import { Popup } from 'devextreme-react/popup';
        import { SelectBox, DropDownOptions } from 'devextreme-react/select-box';

        const wrapperAttr = {
            class: 'custom-colors-hex',
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