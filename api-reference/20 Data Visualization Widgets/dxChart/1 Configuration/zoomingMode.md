---
default: 'none'
acceptValues: 'all' | 'mouse' | 'none' | 'touch'
type: String
---
---
##### shortDescription
Enables zooming in your chart.

---
This option allows you to control the zooming capability in your chart. By default, this capability is off. To make zooming available on touch-enabled devices only, assign *'touch'* to the **zoomingMode** option. In that case, a user will be able to zoom in/out of the chart using the spread/pinch gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need zooming to be enabled, assign *'mouse'* to the **zoomingMode** option. In this case, a user will be able to zoom the chart by rolling the mouse wheel. To enable zooming for all devices, assign *'all'* to the **zoomingMode** option.

[note]In many cases, zooming is useless without scrolling, and vice versa. Hence, when enabling the zooming capability in your chart, consider [enabling the scrolling capability](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') as well.

#include common-ref-enum with {
    enum: "`ChartPointerType`",
    values: "`Mouse`, `Touch`, `All`, and `None`"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/"
}

#####See Also#####
- [zoomArgument(startValue, endValue)](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/3%20Methods/zoomArgument(startValue_endValue).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue') - zooms the chart in code.
- [adjustOnZoom](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/adjustOnZoom.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#adjustOnZoom') - specifies whether or not to adjust the value axis when zooming the widget.
- [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart') - an event that fires when zooming or scrolling begins.
- [zoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd') - an event that fires when zooming or scrolling ends.