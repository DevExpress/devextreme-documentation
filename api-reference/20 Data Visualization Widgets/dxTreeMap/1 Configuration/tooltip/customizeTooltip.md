---
id: dxTreeMap.Options.tooltip.customizeTooltip
type: function(info)
default: undefined
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(info): Object
Information on the node being pressed or hovered over with the mouse pointer.

##### field(info.node): dxTreeMapNode
The [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/') object.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tooltip/#format') value converted to a string.

##### return: Object
The tooltip's text or markup and color.

---
#include dataviz-customize-tooltip-return