---
EventForAction: ..\4 Events\focusIn.md
default: null
type: function
---
---
##### shortDescription
A handler for the **focusIn** event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Assign a function to perform a custom action after the widget's input is focused.