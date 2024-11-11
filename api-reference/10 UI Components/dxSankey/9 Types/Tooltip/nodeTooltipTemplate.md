---
uid: viz/sankey:Tooltip.nodeTooltipTemplate
type: template | undefined
default: undefined
---
---
##### shortDescription
Specifies a custom template for a [node](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/node '/Documentation/ApiReference/UI_Components/dxSankey/Configuration/node/')'s tooltip.

##### param(info): Object
Information about a sankey node being pressed or hovered over.

##### field(info.label): String
The node's [label](/api-reference/10%20UI%20Components/dxSankey/6%20Node/2%20Fields/label.md '/Documentation/ApiReference/UI_Components/dxSankey/Node/Fields/#label').

##### field(info.weightIn): Number
The total weight of the node's incoming [links](/api-reference/10%20UI%20Components/dxSankey/1%20Configuration/link 'Documentation/ApiReference/UI_Components/dxSankey/Configuration/link/').

##### field(info.weightOut): Number
The total weight of the node's outgoing links.

##### param(element): DxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
