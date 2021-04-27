---
id: dxPolarChart.Options.onZoomStart
type: function(e)
default: null
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

##### field(e.component): dxPolarChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.range): VizRange
The [visual range](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/valueAxis/visualRange '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/valueAxis/visualRange/') when zooming or panning starts.

---
#####See Also#####
- [onZoomEnd](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onZoomEnd')