---
EventForAction: ..\4 Events\zoomEnd.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [zoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomEnd') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.rangeStart): Date|Number
The argument axis' start value after zooming or scrolling.

##### field(e.rangeEnd): Date|Number
The argument axis' end value after zooming or scrolling.

---
This handler is called when zooming or scrolling ends.

#####See Also#####
- [zoomingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#zoomingMode') - enables zooming in the chart.
- [scrollingMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/scrollingMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#scrollingMode') - enables scrolling in the chart.
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart') - a handler for the [zoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/zoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#zoomStart') event.