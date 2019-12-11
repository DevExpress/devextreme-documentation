---
inherits: ..\..\..\..\dxToolbar\5 Default Item Template\Default Item Template.md
---
---
##### shortDescription
Configures toolbar controls. These controls allow users to format text and execute commands.

---
The toolbar provides built-in controls and supports custom controls. To add a built-in control to the toolbar, include it in the **items** array:

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

The following built-in controls are available:

<table id="controlNames">
    <tr>
        <td colspan="2">Formatting Controls</td>
        <td class="separateColumn">Action and Other Controls</td>
    </tr>
    <tr>
        <td>
            <ul>
                <li>"background"</li>
                <li>"bold"</li>
                <li>"color"</li>
                <li>"italic"</li>
                <li>"link"</li>
                <li>"image"</li>
                <li>"strike"</li>
                <li>"subscript"</li>
                <li>"superscript"</li>
                <li>"underline"</li>
                <li>"blockquote"</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>"header"</li>
                <li>"increaseIndent"</li>
                <li>"decreaseIndent"</li>
                <li>"orderedList"</li>
                <li>"bulletList"</li>
                <li>"alignLeft"</li>
                <li>"alignCenter"</li>
                <li>"alignRight"</li>
                <li>"alignJustify"</li>
                <li>"codeBlock"</li>
                <li>"variable"</li>
            </ul>
        </td>
        <td class="separateColumn">
            <ul>
                <li>"separator"</li>
                <li>"undo"</li>
                <li>"redo"</li>
                <li>"clear"</li>
            </ul>
        </td>
    </tr>
</table>

<style>
    #controlNames {
        color: #333333;
    }
    #controlNames tr:first-child td {
        padding-bottom: 10px;
        font-weight: bold;
    }
    #controlNames td {
        padding-right: 50px;
        vertical-align: top;
    }
    #controlNames ul {
        padding-left: 0px;
    }
    #controlNames li {
        list-style-type: none;
        font-style: italic;
    }
    #controlNames .separateColumn {
        padding-left: 50px;
        border-left: 1px solid #e6e6e6;
    }
    #controlNames li:before {
        color: #627789;
        content: "";
        border-radius: 3px;
        border: 3px solid #627789;
        display: inline-block;
        margin-right: 15px;
        vertical-align: middle;
    }
</style>

These controls are buttons. To customize a button, assign its name to the [formatName](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') option and specify the [button options](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/') in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object: 

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

To use another widget instead of a button, specify the [widget](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') option and configure the widget in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you should also implement all the logic. 

The toolbar also provides short syntax for implementing a custom drop-down control with multiple choices. Refer to the [formatName](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') description for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/"
}