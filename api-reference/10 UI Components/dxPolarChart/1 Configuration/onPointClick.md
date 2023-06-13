---
id: dxPolarChart.Options.onPointClick
type: function(e)
---
---
##### shortDescription
A function that is executed when a series point is clicked or tapped.

##### param(e): viz/polar_chart:PointClickEvent
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel a click on a point.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The clicked series point; described in the [Point](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
<!-- Description goes here -->