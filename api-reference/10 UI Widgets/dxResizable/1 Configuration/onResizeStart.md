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
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.height): Number
The widget's current height.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.width): Number
The widget's current width.

---
