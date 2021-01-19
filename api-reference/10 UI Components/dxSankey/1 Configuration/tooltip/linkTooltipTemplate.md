---
id: dxSankey.Options.tooltip.linkTooltipTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a [link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link 'Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/')'s tooltip.

##### param(info): Object
Information about a sankey link being pressed or hovered over.

##### field(info.source): String
The [label](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/') of the link's source [node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/').

##### field(info.target): String
The label of the link's target node.

##### field(info.weight): Number
The link's weight.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
