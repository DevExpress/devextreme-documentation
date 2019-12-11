---
EventForAction: ..\4 Events\zoomEnd.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [zoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/zoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance"></a> instance.

##### field(e.element): object
The widget's container.

##### field(e.rangeStart): Date|Number
The value that became the start of the argument axis after zooming or scrolling ended.

##### field(e.rangeEnd): Date|Number
The value that became the end of the argument axis after zooming or scrolling ended.

---
This handler is called when zooming or scrolling ends.

#####See Also#####
- [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') - enables zooming in the chart.
- [scrollingMode](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') - enables scrolling in the chart.
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart') - a handler for the [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart') event.