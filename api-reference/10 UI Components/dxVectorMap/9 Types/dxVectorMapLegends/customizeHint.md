---
notUsedInTheme: 
uid: viz/vector_map:dxVectorMapLegends.customizeHint
type: function(itemInfo)
---
---
##### shortDescription
Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item.

##### param(itemInfo): Object
Information on a legend item.

##### field(itemInfo.color): String
The legend item's color. This field is **undefined** if the [source](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#source') is *'markerSizeGroups'*.

##### field(itemInfo.end): Number
The end value of the group indicated by the legend item.

##### field(itemInfo.index): Number
The group's index.

##### field(itemInfo.size): Number
The diameter of the legend item in pixels. This field is **undefined** if the [source](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#source') is *'areaColorGroups'* or *'markerColorGroups'*.

##### field(itemInfo.start): Number
The start value of the group indicated by the legend item.

##### return: String
The text for the hint to display.

---
<!--
This property accepts a function that must return the required text. When implementing this function, use its parameter to access information on the legend item.

[note]If you have not provided text for legend items using the [customizeText](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/legends/#customizeText') property, hints will not appear.
-->