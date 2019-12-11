---
EventForAction: ..\4 Events\keyPress.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **keyPress** event.

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

---
Assign a function to perform a custom action when the **keypress** DOM event is raised for the current **input** element.