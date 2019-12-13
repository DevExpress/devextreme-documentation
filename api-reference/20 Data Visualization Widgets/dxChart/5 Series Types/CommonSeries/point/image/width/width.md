---
id: dxChartSeriesTypes.CommonSeries.point.image.width
type: Number | Object
default: 30
---
---
##### shortDescription
Specifies the width of an image that is used as a point marker.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
Normally, this option accepts a numeric value, but if you have a *range area* series, you may want to specify different widths for the minimum and maximum points. In that instance, set the **width** option to an object with the **rangeMinPoint** and **rangeMaxPoint** fields.