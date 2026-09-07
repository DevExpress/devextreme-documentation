To navigate between toolbar items using **Tab**, you can disable [allowKeyboardNavigation](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation) in {WidgetName} Toolbar instances. Call **dxToolbar**.[defaultOptions()](/Documentation/ApiReference/UI_Components/dxToolbar/Methods/#defaultOptionsrule) as follows:

---

##### jQuery

    <!-- tab: index.js -->
    DevExpress.ui.dxToolbar.defaultOptions({
        options: {
            onInitialized(e) {
                if ($(e.element).closest('.dx-{widgetname}').length) {
                    e.component.option('allowKeyboardNavigation', false);
                }
            }
        }
    })

##### Angular

    <!-- tab: app.component.ts -->
    import dxToolbar from "devextreme/ui/toolbar";
    import { type DxToolbarTypes } from "devextreme-angular/ui/toolbar";
    // ...
    export class AppComponent {
        constructor() {
            dxToolbar.defaultOptions({
                options: {
                    onInitialized(e: DxToolbarTypes.InitializedEvent) {
                        if (e.element?.closest('.dx-{widgetname}')) {
                            e.component?.option('allowKeyboardNavigation', false);
                        }
                    }
                }
            })
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import dxToolbar from "devextreme/ui/toolbar";
    import { type DxToolbarTypes } from "devextreme-vue/toolbar";

    dxToolbar.defaultOptions({
        options: {
            onInitialized(e: DxToolbarTypes.InitializedEvent) {
                if (e.element?.closest('.dx-{widgetname}')) {
                    e.component?.option('allowKeyboardNavigation', false);
                }
            }
        }
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import dxToolbar from "devextreme/ui/toolbar";
    import { type ToolbarTypes } from "devextreme-react/toolbar";
    
    dxToolbar.defaultOptions({
        options: {
            onInitialized(e: ToolbarTypes.InitializedEvent) {
                if (e.element?.closest('.dx-{widgetname}')) {
                    e.component?.option('allowKeyboardNavigation', false);
                }
            }
        }
    });

---

Replace `.dx-{widgetname}` with a component ID or class to modify keyboard navigation behavior in a specific component only.