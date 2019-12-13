---
id: dxHtmlEditor.formatLine(index, length, formats)
---
---
##### shortDescription
Applies several [block formats](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') to all lines in the given range.

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
[note] The entire line will be formatted even if only a single character from it falls within the given range.


---
#####jQuery

    <!--JavaScript-->
    // Aligns the first line to the right and turns it into an ordered list's item.
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatLine(0, 2, { "align": "right", "list": "ordered" });

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
            // Aligns the first line to the right and turns it into an ordered list's item.
            this.htmlEditor.instance.formatLine(0, 1, { "align": "right", "list": "ordered" });
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
- [formatLine(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue')
- [formatText(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formatName_formatValue') | [formatText(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formats')