---
EventForAction: ..\4 Events\scroll.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [scroll](/api-reference/10%20UI%20Widgets/dxLookup/4%20Events/scroll.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Events/#scroll') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

##### field(e.scrollOffset): object
Specifies the current scroll offset in the following format { top: topOffset, left: leftOffset }.

##### field(e.reachedLeft): boolean
Indicates whether the container's left boundary is reached.

##### field(e.reachedRight): boolean
Indicates whether the container's right boundary is reached.

##### field(e.reachedTop): boolean
Indicates whether the container's top boundary is reached.

##### field(e.reachedBottom): boolean
Indicates whether the container's bottom boundary is reached.

---
Assign a function to perform a custom action on each scroll gesture.