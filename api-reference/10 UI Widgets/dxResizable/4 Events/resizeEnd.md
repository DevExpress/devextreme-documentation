---
id: dxResizable.resizeEnd
type: eventType
---
---
##### shortDescription
Raised when resizing ends.

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

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.width): Number
The current widget width.

---
Main article: [onResizeEnd](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/onResizeEnd.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#onResizeEnd')

#####See Also#####
#include common-link-handleevents