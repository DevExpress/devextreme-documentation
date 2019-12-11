---
type: function(itemInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies text for legend items.

##### param(itemInfo): object
Information on a legend item.

##### field(itemInfo.start): number
The start value of the group indicated by the legend item.

##### field(itemInfo.end): number
The end value of the group indicated by the legend item.

##### field(itemInfo.index): number
The index of the group indicated by the legend item.

##### field(itemInfo.color): string|undefined
The color of the legend item. This field is <i>undefined</i> if the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'markerSizeGroups'</i>.

##### field(itemInfo.size): number|undefined
The diameter of the legend item in pixels. This field is <i>undefined</i> if the <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#source">source</a> is <i>'areaColorGroups'</i> or <i>'markerColorGroups'</i>.

##### return: string
Text for the legend item.

---
This option accepts a function that returns the text for a legend item. When implementing this function, you can access useful data on the legend item using the function's argument.