---
id: dxHtmlEditor.formatText(index, length, formats)
---
---
##### shortDescription
Applies several [text formats](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') to all characters in the given range.

##### param(index): Number
A zero-based index at which to begin formatting.

##### param(length): Number
The length of the content to be formatted.      
[Embedded items](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') have a length of 1.

##### param(formats): Object
Formats to be applied.      
This object should have the following structure:        
`{ "formatName1": "formatValue1", ... }`

---
---
#####jQuery

    <!--JavaScript-->
    // Makes the first five characters bold and underlined
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatText(0, 5, { "bold": "true", "underline": "true" });

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        applyLineFormats() {
            // Makes the first five characters bold and underlined
            this.htmlEditor.instance.formatText(0, 5, { "bold": "true", "underline": "true" });
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

#####See Also#####
- [formatText(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formatName_formatValue')
- [formatLine(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue') | [formatLine(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formats).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formats')