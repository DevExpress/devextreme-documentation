---
id: dxChartSeriesTypesStockSeries.argumentField
type: String
default: 'date'
---
---
##### shortDescription
Specifies which data source field provides arguments for series points.

---
Each point in a financial series has one argument and four values. Arguments are provided by the **argumentField**; values are provided by the **openValueField**, **closeValueField**, **highValueField** and **lowValueField**.

Commonly, when a chart contains several series, many of them have the same argument field. In this case, assign the name of this field to the **argumentField** property of the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. If a series must have a unique argument field, specify the same property, but do so in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.