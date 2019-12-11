---
type: eventType
---
---
##### shortDescription
Fires on each scroll gesture.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

##### field(e.scrollOffset): object
Returns the current scroll offset in the following format { top: topOffset, left: leftOffset }.

##### field(e.reachedLeft): boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): boolean
Indicates whether the container's right boundary is reached

##### field(e.reachedTop): boolean
Indicates whether the container's top boundary is reached.

##### field(e.reachedBottom): boolean
Indicates whether the container's bottom boundary is reached.

---
Instead, you can use the [onScroll](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onScroll.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onScroll') option to handle the event.

#####See Also#####
#include common-link-handleevents