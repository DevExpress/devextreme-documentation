---
id: dxChart.Options.scrollingMode
acceptValues: 'all' | 'mouse' | 'none' | 'touch'
type: String
default: 'none'
dep: dxChart.Options.zoomAndPan
---
---
##### shortDescription
Enables scrolling in your chart.

---
This property allows you to control the scrolling capability in your chart. By default, this capability is off. To make scrolling available on touch-enabled devices only, assign *'touch'* to the **scrollingMode** property. In that case, a user will be able to scroll the chart using the flick gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need scrolling to be enabled, assign *'mouse'* to the **scrollingMode** property. In that case, a user will be able to scroll the chart by dragging. To enable scrolling for all devices, assign *'all'* to the **scrollingMode** property.

Scrolling may also be performed using the scroll bar. To make it visible assign **true** to the **visible** property of the [scrollBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar '/Documentation/ApiReference/UI_Components/dxChart/Configuration/scrollBar/') object.

[note]In many cases, scrolling is useless without zooming, and vice versa. Hence, when enabling the scrolling capability in your chart, consider [enabling the zooming capability](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#zoomingMode') as well.

#include common-ref-enum with {
    enum: "`ChartPointerType`",
    values: "`Mouse`, `Touch`, `All`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

#####See Also#####
- [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#zoomStart') - an event that fires when scrolling or zooming begins.
- [zoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomEnd.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#zoomEnd') - an event that fires when scrolling or zooming ends.