---
id: dxChartSeriesTypes.CommonSeries.point.selectionMode
type: Enums.PointInteractionMode
default: 'onlyPoint'
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a series point.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
[note]Though not provided out of the box, the selection capability can be implemented using the UI component API. Refer to the [onPointClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') property description for details.

When a user selects a series point, this and other series points may react in one of the following ways depending on the value of the **selectionMode** property.

* **onlyPoint**   
Only the selected point changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The selected point changes its style. Points with the same argument do it as well.
* **none**   
The point does not react to selecting.

#####See Also#####
- [pointSelectionMode](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several points can stay selected.
- [pointSelectionChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a point has been changed.