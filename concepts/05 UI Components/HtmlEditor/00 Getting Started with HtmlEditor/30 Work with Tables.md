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
                    "deleteColumn"
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
                </Toolbar>
            </HtmlEditor>
        );
    }

    export default App;

---
