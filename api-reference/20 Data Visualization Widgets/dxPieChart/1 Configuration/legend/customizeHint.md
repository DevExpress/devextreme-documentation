---
type: function(pointInfo)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(pointInfo): Object
Information on the point that corresponds to the legend item.

##### field(pointInfo.pointName): any
Specifies the name of the point argument for which the current legend item is created.

##### field(pointInfo.pointIndex): Number
Specifies the index of the point for which the current legend item is created.

##### field(pointInfo.pointColor): String
Specifies the color of the point for which the current legend item is created.

##### return: String
The text to be displayed in a hint for a legend item.

---
This option accepts a function that must return the required text. When implementing this function, use its parameter to access the information on the point that corresponds to the legend item.