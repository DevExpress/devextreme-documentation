Controls on the toolbar manage the content. Built-in controls include buttons and select boxes.

Buttons apply single-choice formats to the text or perform actions on it. Select boxes apply multiple-choice formats.

![DevExtreme HTML5 JavaScript HtmlEditor Toolbar](/images/htmlEditor/visual_elements/toolbar.png)
 
To add a button to the toolbar, add its [name](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#controlNames) to the [items](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/') array:
 
---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ "bold", "italic", "alignRight", "alignLeft" ]
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="[ 'bold', 'italic', 'alignRight', 'alignLeft' ]"></dxo-toolbar>
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
        .ID("htmlEditor")
        .Toolbar(t => t
            .Items(i => {
                i.Add().FormatName("bold");
                i.Add().FormatName("italic");
                i.Add().FormatName("alignRight");
                i.Add().FormatName("alignLeft");
            })
        )
    )

---
 
To add a select box, specify the [formatName](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/formatName.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName') and [formatValues](/api-reference/10%20UI%20Widgets/dxHtmlEditor/1%20Configuration/toolbar/items/formatValues.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues'):
 
---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "header",
                    formatValues: [1, 2, 3, false]
                }, {
                    formatName: "align",
                    formatValues: ["left", "right", "center"]
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items = [{
            formatName: "header",
            formatValues: [1, 2, 3, false]
        }, {
            formatName: "align",
            formatValues: ["left", "right", "center"]
        }]
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
                i.Add().FormatName("header")
                    .FormatValues(new JS ("[1, 2, 3, false]"));
                i.Add().FormatName("align")
                    .FormatValues(new[] { "left", "right", "center" })
            })
        )
    )

---