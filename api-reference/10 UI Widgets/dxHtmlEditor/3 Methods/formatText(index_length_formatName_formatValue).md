---
id: dxHtmlEditor.formatText(index, length, formatName, formatValue)
---
---
##### shortDescription
Applies a single [text format](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') to all characters in the given range.

##### param(index): Number
A zero-based index at which to begin formatting.

##### param(length): Number
The length of the content to be formatted.      
[Embedded items](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/Widgets/HtmlEditor/Formats/') have a length of 1.

##### param(formatName): String | 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block'
A format name.

##### param(formatValue): any
A format value.

---
---
#####jQuery

    <!--JavaScript-->
    // Makes the first five characters bold
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatText(0, 5, "bold", true);

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        makeTextBold() {
            // Makes the first five characters bold
            this.htmlEditor.instance.formatText(0, 5, "bold", true);
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
- [formatText(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatTextindex_length_formats')
- [formatLine(index, length, formatName, formatValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formatName_formatValue') | [formatLine(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formats).md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#formatLineindex_length_formats')