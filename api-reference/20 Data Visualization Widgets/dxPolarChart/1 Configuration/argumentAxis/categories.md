---
id: dxPolarChart.Options.argumentAxis.categories
type: Array<Number, String, Date>
---
---
##### shortDescription
Specifies the order in which arguments (categories) are arranged on the discrete argument axis.

---
If you specify the chart's data using a common array of objects, these objects may be displayed in a random order. If you set the chart's data for each series individually, the order in which the series are positioned in the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/') array can also be random. In these instances, the resulting argument order on the discrete argument axis may not be appropriate. To specify the order of categories (arguments on a discrete argument axis), assign an array of category names to the **categories** property.