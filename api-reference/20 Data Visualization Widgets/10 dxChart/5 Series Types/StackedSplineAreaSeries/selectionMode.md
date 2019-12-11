---
default: 'includePoints'
acceptValues: 'includePoints' | 'excludePoints' | 'none'
type: string
---
---
##### shortDescription
Specifies series elements to be highlighted when a user selects a series.

---
[note]Though not provided out of the box, the selection capability can be implemented using the widget API. Refer to the [onSeriesClick](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick') option description for details.

When a user selects a series, it may react in one of the following ways depending on the value of the **selectionMode** option.

* **includePoints**   
The series changes its style. If series points are [visible](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedSplineAreaSeries/point/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#visible'), all of them also change their style.
* **excludePoints**   
Only the series changes its style.
* **none**   
The series does not react in any way.

[note]Points in stacked spline area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

#####See Also#####
- [seriesSelectionMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/seriesSelectionMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#seriesSelectionMode') - specifies whether only one or several series can stay selected.
- **series** | [selectionStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/selectionStyle/') - specifies the appearance of a series in the selected state.
- **series** | **point** | [selectionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#selectionMode) - specifies the selection mode of series points.
- [seriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/seriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged') - an event that fires after the selection state of a series has been changed.