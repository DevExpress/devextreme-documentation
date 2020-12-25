---
id: dxResizable.Options.onResizeStart
type: function(e)
default: null
EventForAction: dxResizable.resizeStart
---
---
##### shortDescription
A function that is executed when resizing starts.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.height): Number
The UI component's current height.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.width): Number
The UI component's current width.

---
