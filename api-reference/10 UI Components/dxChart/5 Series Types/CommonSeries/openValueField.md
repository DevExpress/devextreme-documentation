---
id: dxChartSeriesTypes.CommonSeries.openValueField
type: String
default: 'open'
notUsedInTheme: 
---
---
##### shortDescription
Specifies which data source field provides open values for points of a financial series.

##### propertyOf
dxChartSeriesTypes.StockSeries,dxChartSeriesTypes.CandleStickSeries

---
Each point in a financial series has one argument and four values. Arguments are provided by the **argumentField**; values are provided by the **openValueField**, **closeValueField**, **highValueField** and **lowValueField**.

If you use a [series template](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/seriesTemplate '/Documentation/ApiReference/UI_Components/dxChart/Configuration/seriesTemplate/'), specify the value field properties in the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object. Otherwise, do this in the series object within the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array.