---
type: eventType
---
---
##### shortDescription
Fires on each scroll gesture.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.scrollOffset): object
The current scroll offset in the following format { top: topOffset, left: leftOffset }.

##### field(e.reachedLeft): boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): boolean
Indicates whether the container's top boundary is reached.

##### field(e.reachedBottom): boolean
Indicates whether the container's bottom boundary is reached.

---
Instead, you can use the [onScroll](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onScroll.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onScroll') option to handle the event.

#####See Also#####
- [List - Handle Scrolling-Related Events](/concepts/05%20Widgets/List/20%20Scrolling/10%20Events.md '/Documentation/Guide/Widgets/List/Scrolling/#Events')
#include common-link-handleevents