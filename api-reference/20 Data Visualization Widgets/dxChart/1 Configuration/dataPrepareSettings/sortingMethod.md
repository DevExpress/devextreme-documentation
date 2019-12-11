---
id: dxChart.Options.dataPrepareSettings.sortingMethod
type: Boolean | function(a, b)
default: true
---
---
##### shortDescription
Specifies the sorting order in which series points should be drawn.

##### param(a): Object
A [data source](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource') object to be compared.

##### param(b): Object
A [data source](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/dataSource.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource') object to be compared.

##### return: Number
Specifies whether *a* goes before *b*.

---
When this option is set to **true**, the series points are drawn in order of increasing argument. Otherwise, the order of drawing the series points is the same as the order of objects in the data source.

[note]We recommend setting this option to **false** if objects in the data source are already sorted properly. This will improve widget performance.

Alternatively, you can specify the drawing order using a comparison function. It accepts two data source objects and should return the value on which the order will depend. For example, assume that *A* and *B* objects represent two series points. If the function returns a value less than 0, point *A* will be drawn _before_ point *B*. If the function returns a value greater than 0, point *A* will be drawn _after_ point *B*. If the function returns 0, the drawing order of *A* and *B* remains unchanged.

[note]When the [argumentType](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/argumentType.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType') is *'string'*, the **sortingMethod** option does not accept Boolean values. However, you can still apply sorting using a comparison function. Alternatively, use the [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories') array to perform the same task. Note that the **categories** array takes precedence over the **sortingMethod** function.