---
EventForAction: ..\4 Events\keyDown.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **keyDown** event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.jQueryEvent): jQuery-event object
Specifies the jQuery event that caused the action execution.

##### field(e.handled): boolean
Indicates if the grid has already handled the key down event.

---
Assign a function to perform a custom action when a key is pressed down when the widget is focused.