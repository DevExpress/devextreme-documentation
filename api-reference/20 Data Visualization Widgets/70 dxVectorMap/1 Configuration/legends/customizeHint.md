---
type: function(itemInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies text for a hint that appears when a user hovers the mouse pointer over the text of a legend item.

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
Text for the hint of the legend item.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access information on the legend item.

[note]If you have not provided text for legend items using the [customizeText](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/legends/customizeText.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/legends/#customizeText') option, hints will not appear.