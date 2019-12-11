---
EventForAction: ..\4 Events\valueChanged.md
default: null
type: function
---
---
##### shortDescription
A handler for the **valueChanged** event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): object
The widget's new value.

##### field(e.previousValue): object
The widget's previous value.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Assign a function to perform a custom action when the editor value changes.