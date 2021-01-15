---
id: dxRangeSelector.Options.chart.seriesTemplate.customizeSeries
type: function(seriesName)
---
---
##### shortDescription
Specifies a callback function that returns a [series](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/chart/series '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/chart/#series') object with individual series settings.

##### param(seriesName): any
The name of the series to be customized.

##### return: ChartSeries
The series' [configuration](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/').

---
Use this property to specify individual settings for a particular series.

To determine the series to be customized, use the function's parameter. The parameter is the series name that is specified in the **series** array.