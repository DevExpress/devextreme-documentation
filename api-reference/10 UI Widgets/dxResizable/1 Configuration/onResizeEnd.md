---
EventForAction: ..\4 Events\resizeEnd.md
default: null
type: function
---
---
##### shortDescription
A handler for the [resizeEnd](/api-reference/10%20UI%20Widgets/dxResizable/4%20Events/resizeEnd.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Events/#resizeEnd') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.width): number
The current widget width.

##### field(e.height): number
The current widget height.

---
Assign a function to perform a custom action when the widget has been resized.