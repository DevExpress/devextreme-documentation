---
id: dxDataGrid.Options.onKeyDown
type: function(e)
---
---
##### shortDescription
A function that is executed when the UI component is in focus and a key has been pressed down.

##### param(e): ui/data_grid:KeyDownEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
The event that caused the function to execute. It is a [EventObject](/api-reference/50%20Common/Object%20Structures/EventObject '/Documentation/ApiReference/Common/Object_Structures/EventObject/') or a <a href="http://api.jquery.com/category/events/event-object/" target="_blank">jQuery.Event</a> when you use jQuery. This event is based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event" target="_blank">keydown</a> native event.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.handled): Boolean
Indicates whether the UI component has already handled this event.

---
<!-- Description goes here -->