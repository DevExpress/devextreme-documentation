---
uid: viz/tree_map:Tooltip.customizeTooltip
type: function(info) | undefined
default: undefined
---
---
##### shortDescription
Allows you to change tooltip appearance.

##### param(info): Object
Information on the node being pressed or hovered over with the mouse pointer.

##### field(info.node): dxTreeMapNode
The [Node](/api-reference/10%20UI%20Components/dxTreeMap/6%20Node '/Documentation/ApiReference/UI_Components/dxTreeMap/Node/') object.

##### field(info.value): Number
The raw node value.

##### field(info.valueText): String
The [formatted](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/format.md '/Documentation/ApiReference/UI_Components/dxTreeMap/Configuration/tooltip/#format') value converted to a string.

##### return: Object
The tooltip's text or markup and color.

---
