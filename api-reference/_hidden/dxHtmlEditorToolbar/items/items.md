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
The toolbar provides [predefined items](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/') and supports custom items. To add a predefined item to the toolbar, include it in the **items** array:

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
        <dxo-toolbar [items]="[ 'bold', 'italic', 'alignCenter', 'undo', 'redo' ]"></dxo-toolbar>
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

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => {
                i.Add().FormatName("bold");
                i.Add().FormatName("italic");
                i.Add().FormatName("alignCenter");
                i.Add().FormatName("undo");
                i.Add().FormatName("redo");
            })
        )
    )

---


Most of the predefined items are buttons. To customize a button, assign its name to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') option and specify the [button options](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                { 
                    formatName: "clear", 
                    options: { icon: "clear", type: "danger" }
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        { 
            formatName: "clear", 
            options: { icon: "clear", type: "danger" }
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().FormatName("clear")
                    .Widget(w => w.Button()
                        .Icon("clear")
                        .Type(ButtonType.Danger)
                    );
            })
        )
    )

---

To use another widget instead of a button, specify the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') option and configure the widget in the [options](/api-reference/_hidden/dxHtmlEditorToolbar/items/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you should also implement all the logic. 

The toolbar provides a short syntax for implementing a custom drop-down menu with multiple choices. Refer to the [formatName](/api-reference/_hidden/dxHtmlEditorToolbarItem/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') description for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}
