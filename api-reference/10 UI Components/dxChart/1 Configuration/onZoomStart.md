---
id: dxChart.Options.onZoomStart
type: function(e)
default: null
EventForAction: dxChart.zoomStart
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when zooming or panning begins.

##### param(e): Object
Information about the event.

##### field(e.actionType): 'zoom' | 'pan'
Indicates whether the user is zooming or panning the chart.

##### field(e.axis): chartAxisObject
The zoomed/panned axis.

##### field(e.cancel): Boolean
Allows you to cancel zooming or panning.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.range): VizRange
The [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/') when zooming or panning starts.

---
#####See Also#####
- [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/zoomAndPan/')
- [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onZoomEnd')