---
type: eventType
---
---
##### shortDescription
Fires on each scroll gesture.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

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
Instead, you can use the [onScroll](/api-reference/10%20UI%20Widgets/dxScrollable/1%20Configuration/onScroll.md '{basewidgetpath}/Configuration/#onScroll') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')