---
id: dxTreeMap.Options.tooltip.contentTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a tooltip.

##### param(info): Object
Information on the node being pressed or hovered over.

##### field(info.node): dxTreeMapNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format') value converted to a string.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
