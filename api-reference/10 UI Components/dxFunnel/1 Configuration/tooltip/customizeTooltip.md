---
id: dxFunnel.Options.tooltip.customizeTooltip
type: function(info)
default: undefined
---
---
##### shortDescription
Customizes a specific tooltip's appearance.

##### param(info): Object
Information on the funnel item being pressed or hovered over with the mouse pointer.

##### field(info.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(info.percent): Number
The item's percentage value.

##### field(info.percentText): String
The item's [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format') percentage value converted to a string.

##### field(info.value): Number
The raw item value.

##### field(info.valueText): String
The item's [formatted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/format.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#format') value converted to a string.

##### return: Object
The tooltip's text or markup and appearance settings.

---
#include dataviz-customize-tooltip-return