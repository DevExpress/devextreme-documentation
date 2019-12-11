---
EventForAction: ..\4 Events\resizeStart.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [resizeStart](/api-reference/10%20UI%20Widgets/dxResizable/4%20Events/resizeStart.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Events/#resizeStart') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.width): number
The current widget width.

##### field(e.height): number
The current widget height.

---
Assign a function to perform a custom action when an end user started to resize the widget.