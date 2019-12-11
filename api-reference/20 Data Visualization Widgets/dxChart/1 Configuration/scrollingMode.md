---
default: 'none'
acceptValues: 'none' | 'touch' | 'mouse' | 'all'
type: String
---
---
##### shortDescription
Enables scrolling in your chart.

---
This option allows you to control the scrolling capability in your chart. By default, this capability is off. To make scrolling available on touch-enabled devices only, assign *'touch'* to the **scrollingMode** option. In that case, a user will be able to scroll the chart using the flick gesture. If your chart is not supposed to be viewed on touch-enabled devices, but you still need scrolling to be enabled, assign *'mouse'* to the **scrollingMode** option. In that case, a user will be able to scroll the chart by dragging. To enable scrolling for all devices, assign *'all'* to the **scrollingMode** option.

Scrolling may also be performed using the scroll bar. To make it visible assign *true* to the **visible** option of the [scrollBar](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollBar '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/scrollBar/') object.

[note]In many cases, scrolling is useless without zooming, and vice versa. Hence, when enabling the scrolling capability in your chart, consider [enabling the zooming capability](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') as well.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `ChartPointerType` enum. This enum accepts the following values: `Mouse`, `Touch`, `All` and `None`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatures011_zoomingwithscroll/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart') - an event that fires when scrolling or zooming begins.
- [zoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd') - an event that fires when scrolling or zooming ends.