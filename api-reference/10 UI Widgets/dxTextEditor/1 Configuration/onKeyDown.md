---
EventForAction: ..\4 Events\keyDown.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **keyDown** event.

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

---
Assign a function to perform a custom action when a key is pressed down within the widget's input element.