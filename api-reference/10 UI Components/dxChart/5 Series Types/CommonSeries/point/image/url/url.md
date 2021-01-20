---
id: dxChartSeriesTypes.CommonSeries.point.image.url
type: String | Object
default: undefined
---
---
##### shortDescription
Specifies the URL of the image to be used as a point marker.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
Normally, this option accepts one URL as a string value, but if you have a *range area* series, you may want to specify different images for the minimum and maximum points. In that instance, set the **url** option to an object with the **rangeMinPoint** and **rangeMaxPoint** fields.