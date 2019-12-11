---
type: function(itemInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item.

##### param(itemInfo): Object
Information on a legend item.

##### field(itemInfo.start): Number
The start value of the group indicated by the legend item.

##### field(itemInfo.end): Number
The end value of the group indicated by the legend item.

##### field(itemInfo.index): Number
The index of the group indicated by the legend item.

##### field(itemInfo.color): String|undefined
The color of the legend item. This field is **undefined** if the [source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source') is *'markerSizeGroups'*.

##### field(itemInfo.size): Number|undefined
The diameter of the legend item in pixels. This field is **undefined** if the [source](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/source '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source') is *'areaColorGroups'* or *'markerColorGroups'*.

##### return: String
Text for the hint of the legend item.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access information on the legend item.

[note]If you have not provided text for legend items using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText') option, hints will not appear.