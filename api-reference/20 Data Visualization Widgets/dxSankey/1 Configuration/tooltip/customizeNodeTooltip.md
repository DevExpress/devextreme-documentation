---
id: dxSankeyTooltip.customizeNodeTooltip
type: function(info)
default: undefined
---
---
##### shortDescription
Customizes node tooltips' appearance.

##### param(info): Object
Information about a sankey node being pressed or hovered over.

##### field(info.label): String
The node's [label](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node/2%20Fields/label.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/Fields/#label').

##### field(info.title).deprecated
Use 'label' instead.

##### field(info.title): String
The node's label.

##### field(info.weightIn): Number
The total weight of the node's incoming links.

##### field(info.weightOut): Number
The total weight of the node's outgoing links.

##### return: Object
The tooltip's text or markup and appearance settings.

---
#include dataviz-customize-tooltip-return
