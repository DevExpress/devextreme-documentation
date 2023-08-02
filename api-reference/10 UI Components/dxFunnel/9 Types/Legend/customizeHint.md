---
uid: viz/funnel:Legend.customizeHint
type: function(itemInfo)
---
---
##### shortDescription
Specifies the hint that appears when a user hovers the mouse pointer over a legend item.

##### param(itemInfo): Object
Information on the funnel item and its corresponding legend item.

##### field(itemInfo.item): dxFunnelItem
The [Item](/api-reference/10%20UI%20Components/dxFunnel/6%20Item '/Documentation/ApiReference/UI_Components/dxFunnel/Item/') object.

##### field(itemInfo.text): String
The legend item's text.

##### return: String
The text to be displayed in the hint.

---
<!--
This property accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the funnel item that corresponds to the legend item.
-->