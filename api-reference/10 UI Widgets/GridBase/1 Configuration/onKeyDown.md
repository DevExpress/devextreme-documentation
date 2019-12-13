---
id: GridBase.Options.onKeyDown
type: function(e)
default: null
EventForAction: GridBase.keyDown
---
---
##### shortDescription
A function that is executed when the widget is in focus and a key has been pressed down.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.handled): Boolean
Indicates whether the widget has already handled this event.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
