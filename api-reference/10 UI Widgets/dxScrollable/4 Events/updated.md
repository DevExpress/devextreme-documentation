---
type: eventType
---
---
##### shortDescription
Fires after the widget is updated.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Returns a jQuery event that caused action execution.

##### field(e.scrollOffset): object
Returns the current scroll offset in the following format: { top: topOffset, left: leftOffset }.

##### field(e.reachedLeft): boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): boolean
Indicates whether the container's top boundary is reached.

##### field(e.reachedBottom): boolean
Indicates whether the container's bottom boundary is reached.

---
Instead, you can use the [onUpdated](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/onUpdated.md '{basewidgetpath}/Configuration/#onUpdated') option to handle the event.

#####See Also#####
#include common-link-handleevents