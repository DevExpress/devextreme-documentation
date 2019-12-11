---
type: eventType
---
---
##### shortDescription
Raised on each scroll gesture performed on the drop-down item list.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.scrollOffset): Object
The current scroll offset in the following format { top: topOffset, left: leftOffset }.

##### field(e.reachedLeft): Boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): Boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): Boolean
Indicates whether the container's top boundary is reached.

##### field(e.reachedBottom): Boolean
Indicates whether the container's bottom boundary is reached.

---
Main article: [onScroll](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onScroll.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onScroll')

#####See Also#####
#include common-link-handleevents