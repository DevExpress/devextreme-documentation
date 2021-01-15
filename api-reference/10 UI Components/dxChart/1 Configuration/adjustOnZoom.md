---
id: dxChart.Options.adjustOnZoom
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to adjust the value axis's [visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/') when the [argument axis](/Documentation/Guide/UI_Components/Chart/Axes/Overview/) is being [zoomed or panned](/concepts/05%20UI%20Components/Chart/95%20Zooming%20and%20Panning '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/').

---
When a user zooms or pans the argument axis, the range of displayed [series](/Documentation/Guide/UI_Components/Chart/Series/Overview/) values changes accordingly. To display this entire range without unused space on the value axis, the value axis's visual range gets widened or narrowed.

Set this property to **false** if the visual range should be constant and equal to the series values' maximum range.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

#####See Also#####
- [zoomAndPan](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/')