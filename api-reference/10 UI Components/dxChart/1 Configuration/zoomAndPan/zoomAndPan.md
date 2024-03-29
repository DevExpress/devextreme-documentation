---
id: dxChart.Options.zoomAndPan
type: Object
---
---
##### shortDescription
Configures zooming and panning.

---
You can enable zooming and panning for the argument and value axes independently. Set the [argumentAxis](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan/argumentAxis.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#argumentAxis') and [valueAxis](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan/valueAxis.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#valueAxis') properties to enable zooming, panning, or both for a specific axis.

Users can use the mouse and touch gestures to zoom and pan. The following table illustrates user interaction:

<table class="dx-table">
    <tr>
        <th>Device</th>
        <th>Zooming Gestures</th>
        <th>Panning Gestures</th>
    </tr>
    <tr>
        <td>Touch-enabled</td>
        <td>Spread and pinch</td>
        <td>Vertical or horizontal drag</td>
    </tr>
    <tr>
        <td>Mouse-equipped</td>
        <td>Mouse Wheel</td>
        <td>Vertical or horizontal drag</td>
    </tr>
</table>

You can use the [allowTouchGestures](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan/allowTouchGestures.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#allowTouchGestures') or [allowMouseWheel](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan/allowMouseWheel.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#allowMouseWheel') property to disable touch or mouse support.

Users can also use the mouse to zoom the chart by selecting an area with the drag gesture. Refer the [dragToZoom](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/zoomAndPan/dragToZoom.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#dragToZoom') property for more information.

Zooming and panning are related to the visual/whole range concept. Refer to the [Visual and Whole Ranges](/concepts/05%20UI%20Components/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/') article for more information.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingOnAreaSelection/"
}

#####See Also#####
- [Zooming and Panning](/concepts/05%20UI%20Components/Chart/95%20Zooming%20and%20Panning '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/')
- [onZoomStart](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomEnd')
- **argumentAxis**.[visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/') | **valueAxis**.[visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/')