---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: string
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md,..\..\StackedLineSeries\StackedLineSeries.md,..\..\FullStackedLineSeries\FullStackedLineSeries.md,..\..\StackedSplineSeries\StackedSplineSeries.md,..\..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\..\SplineSeries\SplineSeries.md,..\..\StepLineSeries\StepLineSeries.md,..\..\AreaSeries\AreaSeries.md,..\..\StackedAreaSeries\StackedAreaSeries.md,..\..\FullStackedAreaSeries\FullStackedAreaSeries.md,..\..\SplineAreaSeries\SplineAreaSeries.md,..\..\StepAreaSeries\StepAreaSeries.md,..\..\RangeAreaSeries\RangeAreaSeries.md,..\..\ScatterSeries\ScatterSeries.md

##### shortDescription
Specifies series elements to be highlighted when a user selects a series point.

---
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') option description for details.

When a user selects a series point, this and other series points may react in one of the following ways depending on the value of the **selectionMode** option.

* **onlyPoint**   
Only the selected point changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The selected point changes its style. Points with the same argument do it as well.
* **none**   
The point does not react to selecting.

#####See Also#####
- [pointSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#pointSelectionMode') - specifies whether only one or several points can stay selected.
- [pointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#pointSelectionChanged') - an event that fires after the selection state of a point has been changed.