A user can press the following keys to interact with the UI component:

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Ctrl + X / Shift + Delete</td>
        <td>Cuts the selected elements.</td>
    </tr>
    <tr>
        <td>Ctrl + C / Ctrl + Insert</td>
        <td>Copies the selected elements to the clipboard.</td>
    </tr>
    <tr>
        <td>Ctrl + V / Shift + Insert</td>
        <td>Pastes the contents of the clipboard.</td>
    </tr>
    <tr>
        <td>Ctrl + A</td>
        <td>Selects all elements on the diagram page.</td>
    </tr>
    <tr>
        <td>Delete / Backspace</td>
        <td>Deletes the selected elements.</td>
    </tr>
    <tr>
        <td>Ctrl + Z</td>
        <td>Undoes the last action.</td>
    </tr>
    <tr>
        <td>Ctrl + Y</td>
        <td>Redoes the last undone action.</td>
    </tr>
    <tr>
        <td>Ctrl + B</td>
        <td>Applies bold formatting to the text of the selected elements.</td>
    </tr>
    <tr>
        <td>Ctrl + I</td>
        <td>Applies italic formatting to the text of the selected elements.</td>
    </tr>
    <tr>
        <td>Ctrl + U</td>
        <td>Underlines the text of the selected elements.</td>
    </tr>
    <tr>
        <td>Ctrl + Enter</td>
        <td>Finishes shape/connector text editing.</td>
    </tr>
    <tr>
        <td>Arrow Keys</td>
        <td>Moves the selected elements one grid cell in the specified direction.<br>Moves focus between toolbar items (left and right arrow keys only).</td>
    </tr>
    <tr>
        <td>Ctrl + Arrow Keys</td>
        <td>Moves the selected elements one pixel in the specified direction.</td>
    </tr>
    <tr>
        <td>Alt + Arrow Keys</td>
        <td>Clones the selected elements.</td>
    </tr>
    <tr>
        <td>Home<br/>End</td>
        <td>Moves focus to the first/last item in a toolbar.</td>
    </tr>
    <tr>
        <td>Left Mouse Button Drag</td>
        <td>Moves the selected elements. If you realize the mouse button above a container, places the elements inside this container.</td>
    </tr>
    <tr>
        <td>Ctrl + Left Mouse Button Drag</td>
        <td>Moves the selected elements. If you realize the mouse button above a container, places the elements outside this container.</td>
    </tr>
    <tr>
        <td>Shift + Left Mouse Button Drag</td>
        <td>Moves the selected elements horizontally or vertically. If you realize the mouse button above a container, places the elements outside this container.</td>
    </tr>
    <tr>
        <td>Ctrl + Mouse Wheel</td>
        <td>Zooms into or out of a diagram page.</td>
    </tr>
    <tr>
        <td>Space + Left Mouse Button</td>
        <td>Pans a diagram page if the Diagram UI component is focused.</td>
    </tr>
    <tr>
        <td>F11</td>
        <td>Switches to full screen.</td>
    </tr>
</table>

To navigate between toolbar items using **Tab**, you can disable the [allowKeyboardNavigation](/Documentation/ApiReference/UI_Components/dxToolbar/Configuration/#allowKeyboardNavigation) property of built-in Diagram toolbars. Call **dxToolbar**.[defaultOptions()](/Documentation/ApiReference/UI_Components/dxToolbar/Methods/#defaultOptionsrule) as follows:

---

##### jQuery

    <!--JavaScript-->
    DevExpress.ui.dxToolbar.defaultOptions({
        options: {
            onInitialized(e) {
                if ($(e.element).closest('.dx-diagram').length) {
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
                        if (e.element?.closest('.dx-diagram')) {
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
                if (e.element?.closest('.dx-diagram')) {
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
                if (e.element?.closest('.dx-diagram')) {
                    e.component?.option('allowKeyboardNavigation', false);
                }
            }
        }
    });

---

Replace `.dx-diagram` with a component ID or class to modify keyboard navigation behavior in a specific component only.

Refer to the following section for more information: [Work with Chart Elements](https://devexpress.github.io/dotnet-eud/interface-elements-for-web/articles/diagram.html).