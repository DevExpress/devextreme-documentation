---
EventForAction: ..\4 Events\zoomEnd.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when zooming or panning ends.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.event): event
The event that caused the function's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.rangeStart): Date | Number
The argument axis' start value after zooming or panning. Deprecated in favor of the **range** field.

##### field(e.rangeStart).deprecated
Use 'range' instead.

##### field(e.rangeEnd): Date | Number
The argument axis' end value after zooming or panning. Deprecated in favor of the **range** field.

##### field(e.rangeEnd).deprecated
Use 'range' instead.

##### field(e.axis): chartAxisObject
The zoomed/panned axis.

##### field(e.range): VizRange
The [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/') when zooming or panning ends.

##### field(e.previousRange): VizRange
The visual range when zooming or panning starts.

##### field(e.cancel): Boolean
Allows you to cancel zooming or panning.

##### field(e.actionType): 'zoom' | 'pan'
Indicates whether the user has zoomed or panned the chart.

##### field(e.zoomFactor): Number
The zoom factor.

##### field(e.shift): Number
The visual range's shift from the previous position, measured in numeric values or milliseconds (for date-time axes).       
Positive values indicate a shift towards greater axis values; negative values indicate a shift in the opposite direction.

---
#####See Also#####
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/')
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomStart')