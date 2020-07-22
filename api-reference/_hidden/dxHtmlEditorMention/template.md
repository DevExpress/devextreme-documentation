---
id: dxHtmlEditorMention.template
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for mentions.

##### param(mentionData): Object
The current mention's data.

##### field(mentionData.id): String | Number
The mention's identifier provided by the [valueExpr](/api-reference/_hidden/dxHtmlEditorMention/valueExpr.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#valueExpr').

##### field(mentionData.marker): String
The [marker](/api-reference/_hidden/dxHtmlEditorMention/marker.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#marker') that precedes the mention.

##### field(mentionData.value): any
The displayed value provided by the [displayExpr](/api-reference/_hidden/dxHtmlEditorMention/displayExpr.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#displayExpr').

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "mention" }

##### return: String | Element | jQuery
The name or container of a template.

---
#####See Also#####
- [Custom Templates](/concepts/05%20Widgets/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates')