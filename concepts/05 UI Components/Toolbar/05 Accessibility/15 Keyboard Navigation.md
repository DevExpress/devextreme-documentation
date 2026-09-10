You can use the following keys to interact with the Toolbar component when [allowKeyboardNavigation](/api-reference/10%20UI%20Components/dxToolbar/1%20Configuration/allowKeyboardNavigation.md '/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation') is set to `true`:

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Tab / Shift + Tab</td>
        <td>Moves focus to and away from the Toolbar. The first time users focus the Toolbar after initialization, the component highlights the first item. Subsequent focus events restore the previously highlighted item.</td>
    </tr>
    <tr>
        <td>Left Arrow / Right Arrow</td>
        <td>Moves focus to the previous or next available Toolbar item.</td>
    </tr>
    <tr>
        <td>Up Arrow / Down Arrow</td>
        <td>In the overflow, moves focus menu to the previous or next available Toolbar item.<br>When a ButtonGroup item has focus in the toolbar, moves focus between the ButtonGroup items.</td>
    </tr>
    <tr>
        <td>Home / End</td>
        <td>Moves focus to the first or last available Toolbar item.</td>
    </tr>
    <tr>
        <td>Enter / Space</td>
        <td>Activates the focused Toolbar item.</td>
    </tr>
</table>

This keyboard navigation behavior applies to standalone Toolbar instances, as well as instances embedded in DevExtreme components such as DataGrid, FileManager, and Gantt. You can modify this behavior to allow users to navigate between items using **Tab**. Disable [allowKeyboardNavigation](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation) in a [defaultOptions()](/Documentation/ApiReference/UI_Components/dxToolbar/Methods/#defaultOptionsrule) call as follows:

---

##### jQuery

    <!-- tab: index.js -->
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

    <!-- tab: app.component.ts -->
    import dxToolbar from "devextreme/ui/toolbar";
    import { type DxToolbarTypes } from "devextreme-angular/ui/toolbar";
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

    <!-- tab: App.vue -->
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

    <!-- tab: App.tsx -->
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

[important] If you disable **allowKeyboardNavigation**, Toolbar no longer follows the [W3C ARIA APG Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/). Your application will be less accessible to users who rely on keyboard navigation.
