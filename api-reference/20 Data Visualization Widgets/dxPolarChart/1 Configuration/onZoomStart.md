---
id: dxPolarChart.Options.onZoomStart
type: function(e)
default: null
EventForAction: dxPolarChart.zoomStart
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
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.range): VizRange
The [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange/') when zooming or panning starts.

---
#####See Also#####
- [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onZoomEnd')