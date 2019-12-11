---
default: 'val'
type: String
---
---
##### notUsedInTheme

##### propertyOf
..\LineSeries\LineSeries.md,..\StackedLineSeries\StackedLineSeries.md,..\FullStackedLineSeries\FullStackedLineSeries.md,..\StackedSplineSeries\StackedSplineSeries.md,..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\SplineSeries\SplineSeries.md,..\StepLineSeries\StepLineSeries.md,..\AreaSeries\AreaSeries.md,..\StackedAreaSeries\StackedAreaSeries.md,..\FullStackedAreaSeries\FullStackedAreaSeries.md,..\SplineAreaSeries\SplineAreaSeries.md,..\StepAreaSeries\StepAreaSeries.md,..\ScatterSeries\ScatterSeries.md,..\BarSeries\BarSeries.md,..\StackedBarSeries\StackedBarSeries.md,..\FullStackedBarSeries\FullStackedBarSeries.md,..\BubbleSeries\BubbleSeries.md

##### shortDescription
Specifies which data source field provides values for series points.

---
In the Cartesian coordinate system, each point is characterized by a pair of coordinates (X, Y). In a common case, X's are provided by the **argumentField**; Y's are provided by the **valueField**.

Certain series types require more than one value field, because their points are characterized by a larger number of coordinates. These series types are:

- **Range-like series types**       
[*Range bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/') and [*range area*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/RangeAreaSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/') require two value fields: **rangeValue1Field** and **rangeValue2Field**.
- **Financial series types**        
[*Stock*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StockSeries/') and [*candlestick*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/CandleStickSeries/') require four value fields: **openValueField**, **closeValueField**, **highValueField** and **lowValueField**.

If you use a [series template](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/seriesTemplate '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/'), specify the value field properties in the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. Otherwise, do this in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.