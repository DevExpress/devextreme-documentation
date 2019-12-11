---
##### shortDescription
Gets a format, module, or [Parchment](https://github.com/quilljs/parchment).

##### param(modulePath): String
A path to a format (*"formats/[formatName]"*), module (*"modules/[moduleName]"*), or Parchment (*"parchment"*).

##### return: Object
A format, module, or Parchment content.

---
You can perform the following tasks after getting a format, module, or Parchment:

- **Modify the format**      
You can change the markup tag associated with the format and allowed format values, as shown in the code example after this list.
- **[Extend](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends) the format or module**     
You can extend **HtmlEditor**'s [formats](https://github.com/DevExpress/DevExtreme/tree/18_2/js/ui/html_editor/formats) and [modules](https://github.com/DevExpress/DevExtreme/tree/18_2/js/ui/html_editor/modules) and also Quill's [formats](https://github.com/quilljs/quill/tree/1.3.6/formats) and [modules](https://github.com/quilljs/quill/tree/1.3.6/modules). See the [Extend Built-In Formats and Modules](/concepts/05%20Widgets/HtmlEditor/33%20Customize%20Built-In%20Formats%20and%20Modules/20%20Extend.md '/Documentation/Guide/Widgets/HtmlEditor/Customize_Built-In_Formats_and_Modules/#Extend') topic for the code example.
- **Create a custom format based on the Parchment**     
Refer to the [Parchment documentation](https://github.com/quilljs/parchment/blob/master/README.md) for more information.

In the following code, the allowed font sizes are limited in the **size** format and the **bold** format is associated with the `<b>` tag instead of the default `<strong>` tag. After the modifications are made, the formats are [registered](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/registerModules(modules).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#registerModulesmodules').

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        var htmlEditor = $("#htmlEditor").dxHtmlEditor("instance");

        var Size = htmlEditor.getModule("formats/size");
        Size.whitelist = ["11px", "12px", "14px"]; 

        var Bold = htmlEditor.getModule("formats/bold");
        Bold.tagName = "b";

        htmlEditor.registerModules({ "formats/size": Size, "formats/bold": Bold });
    });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild, AfterViewInit } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent implements AfterViewInit {
        @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        ngAfterViewInit () {
            let htmlEditor = this.htmlEditor.instance;

            let Size = htmlEditor.getModule("formats/size");
            Size.whitelist = ["11px", "12px", "14px"]; 
            
            var Bold = htmlEditor.getModule("formats/bold");
            Bold.tagName = "b";

            htmlEditor.registerModules({ "formats/size": Size, "formats/bold": Bold });
        }
    }
    @NgModule({
        imports: [
            // ...
           DxHtmlEditorModule
        ],
        // ...
    })

---