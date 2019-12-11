---
default: 'nearestPoint'
acceptValues: 'nearestPoint' | 'includePoints' | 'excludePoints' | 'none'
type: string
---
---
##### shortDescription
Specifies series elements to be highlighted when a user points to a series.

---
When a user points to a series, it may react in one of the following ways depending on the value of the **hoverMode** option.

* **nearestPoint**   
The series changes its style. If series points are [visible](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/StackedSplineAreaSeries/point/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#visible'), the point nearest to the cursor also changes its style.
* **includePoints**   
The series changes its style. If series points are visible, all of them also change their style.
* **excludePoints**   
Only the series changes its style.
* **none**   
The series does not react to pointing to it.

[note]Points in stacked spline area series are hidden by default. To make them visible, assign *true* to the **point** | **visible** option.

#####See Also#####
- [hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/hoverStyle/') - specifies the appearance of series in the hover state.
- **point** | [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/StackedSplineAreaSeries/point/#hoverMode') - specifies the hover mode of series points.