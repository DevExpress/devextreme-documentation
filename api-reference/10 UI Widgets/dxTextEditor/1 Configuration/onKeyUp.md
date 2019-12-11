---
EventForAction: ..\4 Events\keyUp.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **keyUp** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Assign a function to perform a custom action when a key is released within the widget's input element.