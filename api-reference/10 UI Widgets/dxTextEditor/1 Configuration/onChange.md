---
EventForAction: ..\4 Events\change.md
default: null
type: function
---
---
##### shortDescription
A handler for the **change** event.

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

---
Assign a function to perform a custom action when a change within the widget's input element is committed by an end user.