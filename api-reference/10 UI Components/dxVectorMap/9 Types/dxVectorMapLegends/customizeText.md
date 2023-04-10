---
notUsedInTheme: 
uid: viz\vector_map:dxVectorMapLegends.customizeText
---
---
##### shortDescription
Specifies text for legend items.

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
The text for the legend item to display.

---
<!--
This property accepts a function that returns the text for a legend item. When implementing this function, you can access useful data on the legend item using the function's argument.
-->