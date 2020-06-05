---
id: dxChart.Options.zoomAndPan
type: Object
---
---
##### shortDescription
Configures zooming and panning.

---
You can enable zooming and panning for the argument and value axes independently. Set the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/argumentAxis.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#argumentAxis') and [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/valueAxis.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#valueAxis') options to enable zooming, panning, or both for a specific axis.

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

You can use the [allowTouchGestures](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/allowTouchGestures.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#allowTouchGestures') or [allowMouseWheel](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/allowMouseWheel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#allowMouseWheel') option to disable touch or mouse support.

Users can also use the mouse to zoom the chart by selecting an area with the drag gesture. Refer the [dragToZoom](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/dragToZoom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/#dragToZoom') option for more information.

Zooming and panning are related to the visual/whole range concept. Refer to the [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/') article for more information.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingOnAreaSelection/"
}

#####See Also#####
- [Zooming and Panning](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning '/Documentation/Guide/Widgets/Chart/Zooming_and_Panning/')
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd')
- **argumentAxis**.[visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/') | **valueAxis**.[visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/')