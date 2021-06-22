---
id: dxChartSeriesTypes.CommonSeries.point.hoverMode
acceptValues: 'allArgumentPoints' | 'allSeriesPoints' | 'none' | 'onlyPoint'
type: String
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user pauses on a series point.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
When a user pauses on a series point, this and other series points may react in one of the following ways depending on the value of the **hoverMode** property.

* **onlyPoint**   
Only the point that a user pauses on changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The point that a user pauses on changes its style. Points with the same argument do it as well.
* **none**   
The point does not react to pointing to it.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

#####See Also#####
- [stickyHovering](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/stickyHovering.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#stickyHovering')