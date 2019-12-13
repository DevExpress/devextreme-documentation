---
id: dxChart.Options.adjustOnZoom
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to adjust the value axis's [visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/') when the [argument axis](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Axes/Overview/') is being [zoomed or panned](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/').

---
When a user zooms or pans the argument axis, the range of displayed [series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/') values changes accordingly. To display this entire range without unused space on the value axis, the value axis's visual range gets widened or narrowed.

Set this option to **false** if the visual range should be constant and equal to the series values' maximum range.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

#####See Also#####
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/')