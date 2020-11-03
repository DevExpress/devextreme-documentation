---
id: dxChartSeriesTypesCommonSeriesLabel.position
acceptValues: 'inside' | 'outside'
type: String
default: 'outside'
---
---
##### shortDescription
Specifies whether to display point labels inside or outside of series points. Applies only to bubble, range-like and bar-like series.

##### propertyOf
dxChartSeriesTypes.BarSeries,dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.RangeBarSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.BubbleSeries

---
[note]The default value for [*full-stacked bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/FullStackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/FullStackedBarSeries/') and [*stacked bar*](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/StackedBarSeries '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedBarSeries/') series is *'inside'*.

#include common-ref-enum with {
    enum: "`RelativePosition`",
    values: "`Inside` and `Outside`"
}