---
uid: viz/sankey:Tooltip.linkTooltipTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a [link](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/link 'Documentation/ApiReference/UI_Components/dxSankey/Configuration/link/')'s tooltip.

##### param(info): Object
Information about a sankey link being pressed or hovered over.

##### field(info.source): String
The [label](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/label '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/label/') of the link's source [node](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/node '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/node/').

##### field(info.target): String
The label of the link's target node.

##### field(info.weight): Number
The link's weight.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
