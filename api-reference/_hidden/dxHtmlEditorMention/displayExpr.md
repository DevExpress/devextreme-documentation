---
id: dxHtmlEditorMention.displayExpr
type: String | function(item)
default: 'this'
---
---
##### shortDescription
Specifies the data field whose values should be displayed in the suggestion list.

##### param(item): Object
The current mention's data object.

##### return: String
The displayed value.

---
#include uiwidgets-ref-displayExpr

Do not change the default value if the data source contains primitives.

#####See Also#####
- [valueExpr](/api-reference/_hidden/dxHtmlEditorMention/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#valueExpr')