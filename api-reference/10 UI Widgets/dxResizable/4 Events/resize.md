---
id: dxResizable.resize
type: eventType
---
---
##### shortDescription
Raised each time the widget is resized by one pixel.

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

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.width): Number
The widget's current width.

---
Main article: [onResize](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/onResize.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#onResize')

#####See Also#####
#include common-link-handleevents