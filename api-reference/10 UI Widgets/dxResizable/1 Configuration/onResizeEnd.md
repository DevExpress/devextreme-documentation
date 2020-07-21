---
id: dxResizable.Options.onResizeEnd
type: function(e)
default: null
EventForAction: dxResizable.resizeEnd
---
---
##### shortDescription
A function that is executed when resizing ends.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.height): Number
The current widget height.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.width): Number
The current widget width.

---
