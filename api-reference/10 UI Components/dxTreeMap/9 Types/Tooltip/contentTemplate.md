---
uid: viz/tree_map:Tooltip.contentTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): Object
Information on the node being pressed or hovered over.

##### field(info.node): dxTreeMapNode
The [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') object.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tooltip/#format') value converted to a string.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
