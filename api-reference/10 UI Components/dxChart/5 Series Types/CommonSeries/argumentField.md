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
In the Cartesian coordinate system, each point is characterized by a pair of coordinates (X, Y). In the **Chart** UI component, X's are provided by the **argumentField**; Y's are provided by the **valueField**.

[note]Certain series types have more than one value field, or require additional data fields to be set. Refer to the [valueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/valueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#valueField') property description for details.

Commonly, a chart contains several series, and many of them have the same argument field. In this case, assign the name of this field to the **argumentField** property of the **commonSeriesSettings** object. If a series must have a unique argument field, specify the same property, but do so in the series object within the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array.