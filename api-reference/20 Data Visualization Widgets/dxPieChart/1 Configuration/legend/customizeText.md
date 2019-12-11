---
type: function(pointInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed by a legend item.

##### param(pointInfo): Object
Information about the point to be presented in the legend.

##### field(pointInfo.pointName): any
Specifies the name of the point argument for which the current legend item is created.

##### field(pointInfo.pointIndex): Number
Specifies the index of the point for which the current legend item is created.

##### field(pointInfo.pointColor): String
Specifies the color of the point for which the current legend item is created.

##### return: String
The text to be displayed by a legend item.

---
By default, legend items identify chart points (sectors) by color and argument name. You can also provide other information instead of the point argument name. To do this, implement a callback function for this property, and return the required text. Use the fields of the object passed as the function's parameter in the returned text. For instance, you can use the point argument name or index if it is more appropriate in your case.

Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.