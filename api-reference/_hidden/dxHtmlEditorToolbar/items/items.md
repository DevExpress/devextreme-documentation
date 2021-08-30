---
id: dxHtmlEditorToolbar.items
acceptValues: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'image' | 'size' | 'strike' | 'subscript' | 'superscript' | 'underline' | 'blockquote' | 'header' | 'increaseIndent' | 'decreaseIndent' | 'orderedList' | 'bulletList' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'codeBlock' | 'variable' | 'separator' | 'undo' | 'redo' | 'clear' | 'insertTable' | 'insertRowAbove' | 'insertRowBelow' | 'insertColumnLeft' | 'insertColumnRight' | 'deleteColumn' | 'deleteRow' | 'deleteTable'
type: Array<dxHtmlEditorToolbarItem, String>
inheritsType: dxHtmlEditorToolbarItem
---
---
##### shortDescription
Configures toolbar items. These items allow users to format text and execute commands.

---
The toolbar provides [predefined items](/concepts/05%20UI%20Components/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/UI_Components/HtmlEditor/Toolbar/Predefined_Items/') and supports custom items. To add a predefined item to the toolbar, include it in the **items** array:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ "bold", "italic", "alignCenter", "undo", "redo" ]
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <dxi-item name="bold"></dxi-item>
            <dxi-item name="italic"></dxi-item>
            <dxi-item name="alignCenter"></dxi-item>
            <dxi-item name="undo"></dxi-item>
            <dxi-item name="redo"></dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxToolbar>
                <DxItem name="bold" />
                <DxItem name="italic" />
                <DxItem name="alignCenter" />
                <DxItem name="undo" />
                <DxItem name="redo" />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxToolbar,
        DxItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar,
            DxItem
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        Toolbar,
        Item
    } from 'devextreme-react/html-editor';

    export default function App() {
        return (
            <HtmlEditor>
                <Toolbar>
                    <Item name="bold" />
                    <Item name="italic" />
                    <Item name="alignCenter" />
                    <Item name="undo" />
                    <Item name="redo" />
                </Toolbar>
            </HtmlEditor>
        );
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => {
                i.Add().Name("bold");
                i.Add().Name("italic");
                i.Add().Name("alignCenter");
                i.Add().Name("undo");
                i.Add().Name("redo");
            })
        )
    )

---


Most of the predefined items are buttons. To customize a button, assign its name to the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') property and specify the [button options](/api-reference/10%20UI%20Components/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Components/dxButton/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                { 
                    name: "clear", 
                    options: { icon: "clear", type: "danger" }
                }]
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar>
            <!-- ... -->
            <dxi-item
                name="clear"
                [options]="clearFormatOptions">
            </dxi-item>
        </dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        clearFormatOptions = {
            icon: "clear",
            type: "danger"
        };
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor ... >
            <DxToolbar>
                <!-- ... -->
                <DxItem
                    name="clear"
                    :options="clearFormatOptions"
                />
            </DxToolbar>
        </DxHtmlEditor>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxHtmlEditor, {
        DxToolbar,
        DxItem
    } from 'devextreme-vue/html-editor';

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar,
            DxItem
        },
        data() {
            return {
                clearFormatOptions: {
                    icon: "clear",
                    type: "danger"
                }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import 'devextreme/dist/css/dx.light.css';

    import HtmlEditor, {
        Toolbar,
        Item
    } from 'devextreme-react/html-editor';
    
    const clearFormatOptions = {
        icon: "clear",
        type: "danger"
    };
    
    export default function App() {
        return (
            <HtmlEditor>
                <Toolbar>
                    </* ... */}
                    <Item
                        name="clear"
                        options={clearFormatOptions}
                    />
                </Toolbar>
            </HtmlEditor>
        );
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().Name("clear")
                    .Widget(w => w.Button()
                        .Icon("clear")
                        .Type(ButtonType.Danger)
                    );
            })
        )
    )

---

To use another UI component instead of a button, specify the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#widget') property and configure the UI component in the [options](/api-reference/_hidden/dxHtmlEditorToolbarItem/options.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you should also implement all the logic. 

The toolbar provides a short syntax for implementing a custom drop-down menu with multiple choices. Refer to the [name](/api-reference/_hidden/dxHtmlEditorToolbarItem/name.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/toolbar/items/#name') description for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}
