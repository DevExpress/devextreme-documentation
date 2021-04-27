If you need to customize HtmlEditor's toolbar, pass an array of [items](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/) to the [toolbar](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/). There is a number of [predefined items](/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/) available for customization. Some of the items, such as font size, support multiple values. In these cases use the [formatName](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#formatName) property to define item name and the [formatValue](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#formatValues) property to assign an array of values you need to make available. Set the [multiline](/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/#multiline) property to **true** to display the toolbar items on multiple lines.

---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $('#html-editor').dxHtmlEditor({
            // ...
            toolbar: {
                items: [
                    "undo",
                    "redo",
                    "separator",
                    {
                        formatName: "size",
                        formatValues: [
                            "8pt",
                            "10pt",
                            "12pt",
                            "14pt",
                            "18pt",
                            "24pt",
                            "36pt"
                        ]
                    },
                    {
                        formatName: "font",
                        formatValues: [
                            "Arial",
                            "Courier New",
                            "Georgia",
                            "Impact",
                            "Lucida Console",
                            "Tahoma",
                            "Times New Roman",
                            "Verdana"
                        ]
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
                        formatName: "header",
                        formatValues: [false, 1, 2, 3, 4, 5]
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
                ],
                multiline: true
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-html-editor... >
        <dxo-toolbar [multiline]="true">
            <dxi-item name="undo"></dxi-item>
            <dxi-item name="redo"></dxi-item>
            <dxi-item name="separator"></dxi-item>
            <dxi-item name="size" [acceptedValues]="['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt']"></dxi-item>
            <dxi-item name="font" [acceptedValues]="['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana']"></dxi-item>
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
        </dxo-toolbar>
        <!-- ... -->
    </dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
        <template>
            <DxHtmlEditor... >
                <DxToolbar :multiline="true">
                    <DxItem name="undo"/>
                    <DxItem name="redo"/>
                    <DxItem name="separator"/>
                    <DxItem
                    :accepted-values="sizeValues"
                    name="size"
                    />
                    <DxItem
                    :accepted-values="fontValues"
                    name="font"
                    />
                    <DxItem name="separator"/>
                    <DxItem name="bold"/>
                    <DxItem name="italic"/>
                    <DxItem name="strike"/>
                    <DxItem name="underline"/>
                    <DxItem name="separator"/>
                    <DxItem name="alignLeft"/>
                    <DxItem name="alignCenter"/>
                    <DxItem name="alignRight"/>
                    <DxItem name="alignJustify"/>
                    <DxItem name="separator"/>
                    <DxItem name="orderedList"/>
                    <DxItem name="bulletList"/>
                    <DxItem name="separator"/>
                    <DxItem
                    :accepted-values="headerValues"
                    name="header"
                    />
                    <DxItem name="separator"/>
                    <DxItem name="color"/>
                    <DxItem name="background"/>
                    <DxItem name="separator"/>
                    <DxItem name="link"/>
                    <DxItem name="image"/>
                    <DxItem name="separator"/>
                    <DxItem name="clear"/>
                    <DxItem name="codeBlock"/>
                    <DxItem name="blockquote"/>
                </DxToolbar>
                <!-- ... -->
            </DxHtmlEditor>
        </template>

        <script>
        import {
        ...,
        DxToolbar,
        DxItem
        } from 'devextreme-vue/html-editor';
        // ...



        export default {
            components: {
                ...,
                DxToolbar,
                DxItem,
            },
            data() {
                return {
                    ...,
                    sizeValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
                    fontValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
                    headerValues: [false, 1, 2, 3, 4, 5],
                };
            }
        };
        </script>

##### React

    <!-- tab: App.js -->
    // ...
    import HtmlEditor, {
    Toolbar,
    MediaResizing,
    Item
    } from "devextreme-react/html-editor";

    const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
    const fontValues = [
        "Arial",
        "Courier New",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Tahoma",
        "Times New Roman",
        "Verdana"
    ];
    const headerValues = [false, 1, 2, 3, 4, 5];
    App = () => {
        return (
            <>
                <HtmlEditor...>
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
                    </Toolbar>
                    {/* ... */}
                </HtmlEditor>
            </>
        );
    }

    export default App;


    
---