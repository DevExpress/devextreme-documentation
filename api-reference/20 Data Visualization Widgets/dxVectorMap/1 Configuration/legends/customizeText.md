---
type: function(itemInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies text for legend items.

##### param(itemInfo): Object
Information on a legend item.

##### field(itemInfo.start): Number
The start value of the group indicated by the legend item.

##### field(itemInfo.end): Number
The end value of the group indicated by the legend item.

##### field(itemInfo.index): Number
The index of the group indicated by the legend item.

##### field(itemInfo.color): String|undefined
The color of the legend item. This field is <i>undefined</i> if the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'markerSizeGroups'</i>.

##### field(itemInfo.size): Number|undefined
The diameter of the legend item in pixels. This field is <i>undefined</i> if the <a href="/Documentation/16_2/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'areaColorGroups'</i> or <i>'markerColorGroups'</i>.

##### return: String
Text for the legend item.

---
This option accepts a function that returns the text for a legend item. When implementing this function, you can access useful data on the legend item using the function's argument.