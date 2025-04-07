Users can insert and modify tables if you add the following items to the toolbar:

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            // ...
            toolbar: {
                items: [
                    // ...
                    "insertTable",
                    "deleteTable",
                    "insertRowAbove",
                    "insertRowBelow",
                    "deleteRow",
                    "insertColumnLeft",
                    "insertColumnRight",
                    "deleteColumn",
                    "cellProperties",
                    "tableProperties"
                ]
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ... >
        <dxo-toolbar ... >
            <!-- ... -->
            <dxi-item name="insertTable"></dxi-item>
            <dxi-item name="deleteTable"></dxi-item>
            <dxi-item name="insertRowAbove"></dxi-item>
            <dxi-item name="insertRowBelow"></dxi-item>
            <dxi-item name="deleteRow"></dxi-item>
            <dxi-item name="insertColumnLeft"></dxi-item>
            <dxi-item name="insertColumnRight"></dxi-item>
            <dxi-item name="deleteColumn"></dxi-item>
            <dxi-item name="cellProperties"></dxi-item>
            <dxi-item name="tableProperties"></dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxToolbar ... >
                <!-- ... -->
                <DxItem name="insertTable" />
                <DxItem name="deleteTable" />
                <DxItem name="insertRowAbove" />
                <DxItem name="insertRowBelow" />
                <DxItem name="deleteRow" />
                <DxItem name="insertColumnLeft" />
                <DxItem name="insertColumnRight" />
                <DxItem name="deleteColumn" />
                <DxItem name="cellProperties" />
                <DxItem name="tableProperties" />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

##### React

    <!-- tab: App.js -->
    // ...

    const App = () => {
        return (
            <HtmlEditor ... >
                <Toolbar ... >
                    {/* ... */}
                    <Item name="insertTable" />
                    <Item name="deleteTable" />
                    <Item name="insertRowAbove" />
                    <Item name="insertRowBelow" />
                    <Item name="deleteRow" />
                    <Item name="insertColumnLeft" />
                    <Item name="insertColumnRight" />
                    <Item name="deleteColumn" />
                    <Item name="cellProperties" />
                    <Item name="tableProperties" />
                </Toolbar>
            </HtmlEditor>
        );
    }

    export default App;

---

Users can also modify tables with the context menu if you set the [tableContextMenu](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/tableContextMenu.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/').[enabled](/api-reference/_hidden/dxHtmlEditorTableContextMenu/enabled.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/tableContextMenu/#enabled') property to **true**. Note that the context menu cannot be used to create new tables because the menu is only available within table boundaries. If you want users to create tables, add an *"insertTable"* item to the toolbar.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            // ...
            toolbar: {
                items: [
                    // ...
                    "insertTable"
                ]
            },
            tableContextMenu: {
                enabled: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ... >
        <dxo-toolbar ... >
            <!-- ... -->
            <dxi-item name="insertTable"></dxi-item>
        </dxo-toolbar>
        <dxo-table-context-menu
            [enabled]="true">
        </dxo-table-context-menu>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxToolbar ... >
                <!-- ... -->
                <DxItem name="insertTable" />
            </DxToolbar>
            <DxTableContextMenu :enabled="true" />
        </DxHtmlEditor>
    </template>

    <script>
    import {
        // ...
        DxTableContextMenu
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxTableContextMenu
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import HtmlEditor, {
        // ...
        TableContextMenu
    } from "devextreme-react/html-editor";

    // ...

    const App = () => {
        return (
            <HtmlEditor ... >
                <Toolbar ... >
                    {/* ... */}
                    <Item name="insertTable" />
                </Toolbar>
                <TableContextMenu enabled={true} />
            </HtmlEditor>
        );
    }

    export default App;

---

[note]

- The HTML Editor tables are native HTML tables that use native features; therefore, the same limitations apply. For example, users cannot paste multiline text in separate cells.

- The HTML Editor tables do not support complex elements in cells, such as block elements, lists, nested tables, etc.

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Tables/"
}