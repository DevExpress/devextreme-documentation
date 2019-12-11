---
type: function(seriesInfo)
---
---
##### notUsedInTheme

##### shortDescription
Specifies a callback function that returns the text to be displayed by a legend item.

##### param(seriesInfo): object
Information about the series to be presented in the legend.

##### field(seriesInfo.seriesName): string
Specifies the name of the series for which the current legend item is created.

##### field(seriesInfo.seriesIndex): Number
Specifies the index of the series for which the current legend item is created.

##### field(seriesInfo.seriesColor): string
Specifies the color of the series for which the current legend item is created.

##### return: string
The text to be displayed by a legend item.

---
By default, legend items identify series by color and name. You can also provide other information instead of the series name. To do this, implement a callback function for this property, and return the required text. Use the fields of the object passed as the function's parameter in the returned text. For instance, you can use the series name or index if it is more appropriate in your case.

Alternatively, you can use the **this** object within the function. This object has the same structure as the object passed as a parameter.