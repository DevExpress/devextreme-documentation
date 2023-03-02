---
id: Enums.HtmlEditorFormat
acceptValues: 'background' | 'bold' | 'color' | 'font' | 'italic' | 'link' | 'size' | 'strike' | 'script' | 'underline' | 'blockquote' | 'header' | 'indent' | 'list' | 'align' | 'code-block'
type: Union
---
---
##### shortDescription
Applies a format to the selected content. Cannot be used with [embedded formats](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/').
Applies a single [block format](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all lines in the given range.
Applies a single [text format](/concepts/05%20UI%20Components/HtmlEditor/10%20Formats '/Documentation/Guide/UI_Components/HtmlEditor/Formats/') to all characters in the given range.
Inserts text into the HtmlEditor.

---
<!--
dxHtmlEditor.format(formatName, formatValue)(10 UI Components\dxHtmlEditor\3 Methods\format(formatName_formatValue).md)
dxHtmlEditor.formatLine(index, length, formatName, formatValue)(10 UI Components\dxHtmlEditor\3 Methods\formatLine(index_length_formatName_formatValue).md)
dxHtmlEditor.formatText(index, length, formatName, formatValue)(10 UI Components\dxHtmlEditor\3 Methods\formatText(index_length_formatName_formatValue).md)
dxHtmlEditor.insertText(index, text, formatName, formatValue)(10 UI Components\dxHtmlEditor\3 Methods\insertText(index_text_formatName_formatValue).md)
-->