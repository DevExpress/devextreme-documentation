You can use the following keys to interact with the Toolbar component when [allowKeyboardNavigation](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/allowKeyboardNavigation.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation') is set to `true`:

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab</td>
        <td>If a Toolbar receives focus, it focuses its first available item.</td>
    </tr>
    <tr>
        <td>Shift + Tab</td>
        <td>If a Toolbar receives focus, it focuses its last available item.</td>
    </tr>
    <tr>
        <td>Left Arrow / Right Arrow</td>
        <td>Moves focus to the previous or next available Toolbar item.</td>
    </tr>
    <tr>
        <td>Home / End</td>
        <td>Moves focus to the first or last available Toolbar item.</td>
    </tr>
</table>

This keyboard navigation behavior applies to all Toolbar instances within your app, including instances embedded in DevExtreme components such as DataGrid, FileManager, and Gantt. To modify this behavior in built-in Toolbar instances and allow users to navigate between items using **Tab**, you can disable [allowKeyboardNavigation](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation) in a [defaultOptions()](/Documentation/ApiReference/UI_Components/dxToolbar/Methods/#defaultOptionsrule) call as follows:

---

##### jQuery

    <!--JavaScript-->
    DevExpress.ui.dxToolbar.defaultOptions({
        options: {
            onInitialized(e) {
                if ($(e.element).closest('.dx-component-name').length) {
                    e.component.option('allowKeyboardNavigation', false);
                }
            }
        }
    })

##### Angular

    <!--TypeScript-->
    import {WidgetName}, { Properties } from "devextreme/ui/{widget_name}";
    // ...
    export class AppComponent {
        constructor() {
            dxToolbar.defaultOptions({
                options: {
                    onInitialized(e: DxToolbarTypes.InitializedEvent) {
                        if (e.element?.closest('.dx-component-name')) {
                            e.component?.option('allowKeyboardNavigation', false);
                        }
                    }
                }
            })
        }
    }

##### Vue

    <script setup lang="ts">
    import dxToolbar from "devextreme/ui/toolbar";
    import { type DxToolbarTypes } from "devextreme-vue/toolbar";

    dxToolbar.defaultOptions({
        options: {
            onInitialized(e: DxToolbarTypes.InitializedEvent) {
                if (e.element?.closest('.dx-component-name')) {
                    e.component?.option('allowKeyboardNavigation', false);
                }
            }
        }
    });
    </script>

##### React

    import dxToolbar from "devextreme/ui/toolbar";
    import { type ToolbarTypes } from "devextreme-react/toolbar";
    
    dxToolbar.defaultOptions({
        options: {
            onInitialized(e: ToolbarTypes.InitializedEvent) {
                if (e.element?.closest('.dx-component-name')) {
                    e.component?.option('allowKeyboardNavigation', false);
                }
            }
        }
    });

---

Replace `.dx-component-name` with a component ID or class.
