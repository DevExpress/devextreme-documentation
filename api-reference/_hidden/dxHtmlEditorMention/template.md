---
id: dxHtmlEditorMention.template
type: template
default: null
---
---
##### shortDescription
Specifies custom markup for mentions.

##### param(mentionData): Object
The current mention's data.

##### field(mentionData.id): String | Number
The mention's identifier (specified in the [valueExpr](/api-reference/_hidden/dxHtmlEditorMention/valueExpr.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mentions/#valueExpr') field).

##### field(mentionData.marker): String
The [marker](/api-reference/_hidden/dxHtmlEditorMention/marker.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mentions/#marker') that precedes the mention.

##### field(mentionData.value): any
The mention's display value (specified in the [displayExpr](/api-reference/_hidden/dxHtmlEditorMention/displayExpr.md '/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/mentions/#displayExpr') field).

##### param(contentElement): DxElement
#include common-ref-elementparam with { element: "mention" }

##### return: String | Element | jQuery
The name or container of a template.

---

[note] Specify mention templates within inline containers (such as `<span>`).

#####See Also#####
- [Custom Templates](/concepts/05%20UI%20Components/zz%20Common/30%20Templates/10%20Custom%20Templates.md '/Documentation/Guide/UI_Components/Common/Templates/#Custom_Templates')