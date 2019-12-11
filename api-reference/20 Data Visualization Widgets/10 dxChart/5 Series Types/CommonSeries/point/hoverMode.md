---
default: 'onlyPoint'
acceptValues: 'onlyPoint' | 'allSeriesPoints' | 'allArgumentPoints' | 'none'
type: string
---
---
##### propertyOf
..\..\LineSeries\LineSeries.md,..\..\StackedLineSeries\StackedLineSeries.md,..\..\FullStackedLineSeries\FullStackedLineSeries.md,..\..\StackedSplineSeries\StackedSplineSeries.md,..\..\FullStackedSplineSeries\FullStackedSplineSeries.md,..\..\SplineSeries\SplineSeries.md,..\..\StepLineSeries\StepLineSeries.md,..\..\AreaSeries\AreaSeries.md,..\..\StackedAreaSeries\StackedAreaSeries.md,..\..\FullStackedAreaSeries\FullStackedAreaSeries.md,..\..\StackedSplineAreaSeries\StackedSplineAreaSeries.md,..\..\FullStackedSplineAreaSeries\FullStackedSplineAreaSeries.md,..\..\SplineAreaSeries\SplineAreaSeries.md,..\..\StepAreaSeries\StepAreaSeries.md,..\..\RangeAreaSeries\RangeAreaSeries.md,..\..\ScatterSeries\ScatterSeries.md

##### shortDescription
Specifies series elements to be highlighted when a user pauses on a series point.

---
When a user pauses on a series point, this and other series points may react in one of the following ways depending on the value of the **hoverMode** option.

* **onlyPoint**   
Only the point that a user pauses on changes its style.
* **allSeriesPoints**   
All points in the series change their style.
* **allArgumentPoints**   
The point that a user pauses on changes its style. Points with the same argument do it as well.
* **none**   
The point does not react to pointing to it.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureshovermode/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>