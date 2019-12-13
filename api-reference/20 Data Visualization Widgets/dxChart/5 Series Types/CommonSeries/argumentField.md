---
id: dxChartSeriesTypes.CommonSeries.argumentField
type: String
default: 'arg'
notUsedInTheme: 
---
---
##### shortDescription
Specifies which data source field provides arguments for series points.

---
In the Cartesian coordinate system, each point is characterized by a pair of coordinates (X, Y). In the **Chart** widget, X's are provided by the **argumentField**; Y's are provided by the **valueField**.

[note]Certain series types have more than one value field, or require additional data fields to be set. Refer to the [valueField](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/valueField.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#valueField') option description for details.

Commonly, a chart contains several series, and many of them have the same argument field. In this case, assign the name of this field to the **argumentField** property of the **commonSeriesSettings** object. If a series must have a unique argument field, specify the same property, but do so in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.