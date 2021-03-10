---
id: dxHtmlEditor.formatLine(index, length, name, acceptedValue)
---
---
##### shortDescription
Applies a single [block format](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all lines in the given range.

##### param(index): Number
A zero-based index at which to begin formatting.

##### param(length): Number
The length of the content to be formatted.      
[Embedded items](/concepts/05%20Widgets/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') have a length of 1.

##### param(name): String | 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block'
A format name.

##### param(acceptedValue): any
A format value.

---
[note] The entire line will be formatted even if only a single character from it falls within the given range.

---
##### jQuery

    <!--JavaScript-->
    // Aligns the first line to the right
    $("#htmlEditorContainer").dxHtmlEditor("instance").formatLine(0, 1, "align", "right");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxHtmlEditorModule, DxHtmlEditorComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxHtmlEditorComponent, { static: false }) htmlEditor: DxHtmlEditorComponent;
        // Prior to Angular 8
        // @ViewChild(DxHtmlEditorComponent) htmlEditor: DxHtmlEditorComponent;
        alignFirstLineToRight() {
            this.htmlEditor.instance.formatLine(0, 1, "align", "right");
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
- [formatLine(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatLine(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatLineindex_length_formats')
- [formatText(index, length, name, acceptedValue)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formatName_formatValue).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_name_acceptedValue') | [formatText(index, length, formats)](/api-reference/10%20UI%20Widgets/dxHtmlEditor/3%20Methods/formatText(index_length_formats).md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Methods/#formatTextindex_length_formats')