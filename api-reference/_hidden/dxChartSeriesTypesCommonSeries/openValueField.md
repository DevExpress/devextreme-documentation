---
id: dxChartSeriesTypesCommonSeries.openValueField
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

If you use a [series template](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesTemplate '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/'), specify the value field properties in the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. Otherwise, do this in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.