---
id: dxFunnel.Options.legend.customizeHint
type: function(itemInfo)
---
---
##### shortDescription
Specifies the hint that appears when a user hovers the mouse pointer over a legend item.

##### param(itemInfo): Object
Information on the funnel item and its corresponding legend item.

##### field(itemInfo.item): dxFunnelItem
The [Item](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/6%20Item '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Item/') object.

##### field(itemInfo.text): String
The legend item's text.

##### return: String
The text to be displayed in the hint.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the funnel item that corresponds to the legend item.