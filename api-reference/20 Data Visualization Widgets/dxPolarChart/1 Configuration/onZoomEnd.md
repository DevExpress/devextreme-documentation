---
id: dxPolarChart.Options.onZoomEnd
type: function(e)
default: null
EventForAction: dxPolarChart.zoomEnd
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when zooming or panning ends.

##### param(e): Object
Information about the event.

##### field(e.actionType): 'zoom' | 'pan'
Indicates whether the user zoomed or panned the chart.

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

##### field(e.previousRange): VizRange
The visual range when zooming or panning starts.

##### field(e.range): VizRange
The [visual range](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/visualRange/') when zooming or panning ends.

##### field(e.shift): Number
The visual range's shift from the previous position, measured in numeric values or milliseconds (for date-time axes).       
Positive values indicate a shift towards greater axis values; negative values indicate a shift in the opposite direction.

##### field(e.zoomFactor): Number
The zoom factor.

---
#####See Also#####
- [onZoomStart](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onZoomStart')
