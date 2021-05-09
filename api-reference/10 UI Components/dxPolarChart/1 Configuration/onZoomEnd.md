---
id: dxPolarChart.Options.onZoomEnd
type: function(e)
default: null
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

##### field(e.component): dxPolarChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.previousRange): VizRange
The visual range when zooming or panning starts.

##### field(e.range): VizRange
The [visual range](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/visualRange/') when zooming or panning ends.

##### field(e.shift): Number
The visual range's shift from the previous position, measured in numeric values or milliseconds (for date-time axes).       
Positive values indicate a shift towards greater axis values; negative values indicate a shift in the opposite direction.

##### field(e.zoomFactor): Number
The zoom factor.

---
#####See Also#####
- [onZoomStart](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onZoomStart.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onZoomStart')
