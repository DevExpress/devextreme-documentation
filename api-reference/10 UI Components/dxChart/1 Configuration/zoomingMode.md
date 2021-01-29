---
id: dxChart.Options.zoomingMode
acceptValues: 'all' | 'mouse' | 'none' | 'touch'
type: String
default: 'none'
dep: dxChart.Options.zoomAndPan
---
---
##### shortDescription
Enables zooming in your chart.

---
This property allows you to control the zooming capability in your chart. By default, this capability is off. To make zooming available on touch-enabled devices only, assign *'touch'* to the **zoomingMode** property. In that case, a user will be able to zoom in/out of the chart using the spread/pinch gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need zooming to be enabled, assign *'mouse'* to the **zoomingMode** property. In this case, a user will be able to zoom the chart by rolling the mouse wheel. To enable zooming for all devices, assign *'all'* to the **zoomingMode** property.

[note]In many cases, zooming is useless without scrolling, and vice versa. Hence, when enabling the zooming capability in your chart, consider [enabling the scrolling capability](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#scrollingMode') as well.

#include common-ref-enum with {
    enum: "`ChartPointerType`",
    values: "`Mouse`, `Touch`, `All`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

#####See Also#####
- **argumentAxis**.[visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/') | **valueAxis**.[visualRange](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/visualRange/')
- **Axis**.[visualRange(visualRange)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Axis/3%20Methods/visualRange(visualRange).md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Axis/Methods/#visualRangevisualRange')
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomStart') | [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomEnd')