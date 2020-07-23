---
id: dxSankey.Options.tooltip.nodeTooltipTemplate
type: template
default: undefined
---
---
##### shortDescription
Specifies a custom template for a [node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/node/')'s tooltip.

##### param(info): Object
Information about a sankey node being pressed or hovered over.

##### field(info.label): String
The node's [label](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node/2%20Fields/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Fields/#label').

##### field(info.weightIn): Number
The total weight of the node's incoming [links](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/link 'Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/link/').

##### field(info.weightOut): Number
The total weight of the node's outgoing links.

##### param(element): dxElement
#include common-ref-elementparam with { element: "tooltip" }

##### return: String | Element | jQuery
#include common-template-return-value

---
