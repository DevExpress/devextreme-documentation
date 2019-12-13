---
id: dxTextEditor.keyDown
type: eventType
---
---
##### shortDescription
Raised when a user is pressing a key on the keyboard.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onKeyDown](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onKeyDown.md '{basewidgetpath}/Configuration/#onKeyDown')

#####See Also#####
#include common-link-handleevents