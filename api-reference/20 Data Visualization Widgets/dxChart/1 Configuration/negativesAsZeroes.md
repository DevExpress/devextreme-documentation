---
id: dxChart.Options.negativesAsZeroes
type: Boolean
default: false
---
---
##### shortDescription
Forces the widget to treat negative values as zeroes. Applies to stacked-like series only.

##### propertyOf
dxChartSeriesTypes.StackedBarSeries,dxChartSeriesTypes.FullStackedBarSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries

---
Oftentimes, series data contains negative values. Visualizing such data using stacked-like series may lead to unexpected results. To prevent situations of this kind, assign **true** to the **negativesAsZeroes** option, and the widget will count all negative values as zeroes.