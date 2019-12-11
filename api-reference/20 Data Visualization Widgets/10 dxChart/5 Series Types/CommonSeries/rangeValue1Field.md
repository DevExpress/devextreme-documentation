---
default: 'val1'
type: string
---
---
##### notUsedInTheme

##### propertyOf
..\RangeBarSeries\RangeBarSeries.md,..\RangeAreaSeries\RangeAreaSeries.md

##### shortDescription
Coupled with the **rangeValue2Field** option, specifies which data source field provides values for a range-like series.

---
Each point in a range-like series has one argument and two values. Arguments are provided by the **argumentField**; values are provided by the **rangeValue1Field**, **rangeValue2Field**.

If you use a [series template](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/seriesTemplate '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/seriesTemplate/'), specify the value field properties in the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonSeriesSettings/') object. Otherwise, do this in the series object within the [series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/') array.