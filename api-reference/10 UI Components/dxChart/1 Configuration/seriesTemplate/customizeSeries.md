---
id: dxChart.Options.seriesTemplate.customizeSeries
type: function(seriesName)
---
---
##### shortDescription
Specifies a callback function that returns a [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/'') object with individual series settings.

##### param(seriesName): any
The name of the series to be customized.

##### return: ChartSeries
The series' [configuration](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/'').

---
Use this property to specify individual settings for a particular series.

To determine the series to which the function's return value will be applied, use the function's parameter. The parameter is set to the series name that is specified in the data source's field.