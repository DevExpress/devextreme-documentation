---
id: dxTextEditor.focusOut
type: eventType
---
---
##### shortDescription
Raised when the widget loses focus.

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
Main article: [onFocusOut](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onFocusOut.md '{basewidgetpath}/Configuration/#onFocusOut')
 
#####See Also#####
#include common-link-handleevents