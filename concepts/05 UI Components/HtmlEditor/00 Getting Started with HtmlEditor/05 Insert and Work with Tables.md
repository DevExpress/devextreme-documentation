If you need to customize HtmlEditor's toolbar, pass an array of [items](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/) to the [toolbar](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/). There is a number of [predefined items](/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/) available for customization. Some of the items, such as font size, support multiple values. In these cases use the [formatName](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#formatName) property to define item name and the [formatValue]() property to assign an array of values you need to make available. Set the [multiline](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/#multiline) property to **true** to display the toolbar items on multiple lines.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#html-editor').dxHtmlEditor({
            // ...
            toolbar: {
                items: [
                    "separator",
                    "insertTable",
                    "deleteTable",
                    "insertRowAbove",
                    "insertRowBelow",
                    "deleteRow",
                    "insertColumnLeft",
                    "insertColumnRight",
                    "deleteColumn"
                ],
                // ...
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor... >
        <dxo-toolbar... >
            <!-- ... -->
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="insertTable"></dxi-item>
            <dxi-item name="deleteTable"></dxi-item>
            <dxi-item name="insertRowAbove"></dxi-item>
            <dxi-item name="insertRowBelow"></dxi-item>
            <dxi-item name="deleteRow"></dxi-item>
            <dxi-item name="insertColumnLeft"></dxi-item>
            <dxi-item name="insertColumnRight"></dxi-item>
            <dxi-item name="deleteColumn"></dxi-item>
        </dxo-toolbar>
        <!-- ... -->
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
        <DxHtmlEditor... >
            <DxToolbar...>
                <!-- ... -->
                <DxItem name="separator"/>
                <DxItem name="insertTable"/>
                <DxItem name="deleteTable"/>
                <DxItem name="insertRowAbove"/>
                <DxItem name="insertRowBelow"/>
                <DxItem name="deleteRow"/>
                <DxItem name="insertColumnLeft"/>
                <DxItem name="insertColumnRight"/>
                <DxItem name="deleteColumn"/>
            </DxToolbar>
            <!-- ... -->
        </DxHtmlEditor>

##### React

    <!-- tab: App.js -->
    // ...

    App = () => {
        return (
            <>
                <HtmlEditor...>
                    <Toolbar...>
                        {/* ... */}
                        <Item name="separator" />
                        <Item name="insertTable" />
                        <Item name="deleteTable" />
                        <Item name="insertRowAbove" />
                        <Item name="insertRowBelow" />
                        <Item name="deleteRow" />
                        <Item name="insertColumnLeft" />
                        <Item name="insertColumnRight" />
                        <Item name="deleteColumn" />
                    </Toolbar>
                    {/* ... */}
                </HtmlEditor>
            </>
        );
    }

    export default App;


    
---