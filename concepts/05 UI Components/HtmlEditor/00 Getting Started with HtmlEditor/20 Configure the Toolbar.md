The HTML Editor's toolbar contains buttons and drop-down menus that allow users to edit and format content. To configure the toolbar, specify an array of [items](/api-reference/_hidden/dxHtmlEditorToolbar/items '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/') in the [toolbar](/api-reference/10%20UI%20Components/dxHtmlEditor/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/') object. You can use [predefined items](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/') or create [custom items](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/20%20Add%20a%20Custom%20Item.md '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Add_a_Custom_Item/'). You can specify a list of accepted values for certain predefined items, such as font size. To do so, use the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') property to define the item and the [acceptedValues](/api-reference/_hidden/dxHtmlEditorToolbarItem/acceptedValues.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#acceptedValues') property to assign an array of available values.

If toolbar items overflow the length of the toolbar, enable the [multiline](/api-reference/_hidden/dxHtmlEditorToolbar/multiline.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/#multiline') property to arrange the items in multiple lines. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#html-editor").dxHtmlEditor({
            // ...
            toolbar: {
                items: [
                    "undo",
                    "redo",
                    "separator",
                    {
                        name: "size",
                        acceptedValues: [ "8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt" ]
                    },
                    {
                        name: "font",
                        acceptedValues: [ "Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana" ]
                    },
                    "separator",
                    "bold",
                    "italic",
                    "strike",
                    "underline",
                    "separator",
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                    "alignJustify",
                    "separator",
                    "orderedList",
                    "bulletList",
                    "separator",
                    {
                        name: "header",
                        acceptedValues: [false, 1, 2, 3, 4, 5]
                    },
                    "separator",
                    "color",
                    "background",
                    "separator",
                    "link",
                    "image",
                    "separator",
                    "clear",
                    "codeBlock",
                    "blockquote",
                    "separator",
                ],
                multiline: true
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor ... >
        <dxo-toolbar [multiline]="true">
            <dxi-item name="undo"></dxi-item>
            <dxi-item name="redo"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="size" [acceptedValues]="['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt']"></dxi-item>
            <dxi-item name="font" [acceptedValues]="['Arial', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana']"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="bold"></dxi-item>
            <dxi-item name="italic"></dxi-item>
            <dxi-item name="strike"></dxi-item>
            <dxi-item name="underline"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="alignLeft"></dxi-item>
            <dxi-item name="alignCenter"></dxi-item>
            <dxi-item name="alignRight"></dxi-item>
            <dxi-item name="alignJustify"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="orderedList"></dxi-item>
            <dxi-item name="bulletList"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="header" [acceptedValues]="[false, 1, 2, 3, 4, 5]"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="color"></dxi-item>
            <dxi-item name="background"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="link"></dxi-item>
            <dxi-item name="image"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="clear"></dxi-item>
            <dxi-item name="codeBlock"></dxi-item>
            <dxi-item name="blockquote"></dxi-item>
            <dxi-item name="separator"></dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor... >
            <DxToolbar :multiline="true">
                <DxItem name="undo" />
                <DxItem name="redo" />
                <DxItem name="separator" />
                <DxItem
                    name="size"
                    :accepted-values="sizeValues"
                />
                <DxItem
                    name="font"
                    :accepted-values="fontValues"
                />
                <DxItem name="separator" />
                <DxItem name="bold" />
                <DxItem name="italic" />
                <DxItem name="strike" />
                <DxItem name="underline" />
                <DxItem name="separator" />
                <DxItem name="alignLeft" />
                <DxItem name="alignCenter" />
                <DxItem name="alignRight" />
                <DxItem name="alignJustify" />
                <DxItem name="separator" />
                <DxItem name="orderedList" />
                <DxItem name="bulletList" />
                <DxItem name="separator" />
                <DxItem
                    name="header"
                    :accepted-values="headerValues"
                />
                <DxItem name="separator" />
                <DxItem name="color" />
                <DxItem name="background" />
                <DxItem name="separator" />
                <DxItem name="link" />
                <DxItem name="image" />
                <DxItem name="separator" />
                <DxItem name="clear" />
                <DxItem name="codeBlock" />
                <DxItem name="blockquote" />
                <DxItem name="separator" />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import {
        // ...
        DxToolbar,
        DxItem,
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            // ...
            DxToolbar,
            DxItem,
        },
        data() {
            return {
                sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
                fontValues: ['Arial', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'],
                headerValues: [false, 1, 2, 3, 4, 5]
            };
        }
    };
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {
        // ...
        Toolbar,
        Item,
    } from "devextreme-react/html-editor";

    // ...

    const sizeValues = [ "8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt" ];
    const fontValues = [ "Arial", "Georgia", "Tahoma", "Times New Roman", "Verdana" ];
    const headerValues = [ false, 1, 2, 3, 4, 5 ];

    const App = () => {
        return (
            <HtmlEditor ... >
                <Toolbar multiline={true}>
                    <Item name="undo" />
                    <Item name="redo" />
                    <Item name="separator" />
                    <Item name="size" acceptedValues={sizeValues} />
                    <Item name="font" acceptedValues={fontValues} />
                    <Item name="separator" />
                    <Item name="bold" />
                    <Item name="italic" />
                    <Item name="strike" />
                    <Item name="underline" />
                    <Item name="separator" />
                    <Item name="alignLeft" />
                    <Item name="alignCenter" />
                    <Item name="alignRight" />
                    <Item name="alignJustify" />
                    <Item name="separator" />
                    <Item name="orderedList" />
                    <Item name="bulletList" />
                    <Item name="separator" />
                    <Item name="header" acceptedValues={headerValues} />
                    <Item name="separator" />
                    <Item name="color" />
                    <Item name="background" />
                    <Item name="separator" />
                    <Item name="link" />
                    <Item name="image" />
                    <Item name="separator" />
                    <Item name="clear" />
                    <Item name="codeBlock" />
                    <Item name="blockquote" />
                    <Item name="separator" />
                </Toolbar>
            </HtmlEditor>
        );
    };

    export default App;

---
