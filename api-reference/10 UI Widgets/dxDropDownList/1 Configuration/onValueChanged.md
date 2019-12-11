---
EventForAction: ..\4 Events\valueChanged.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **valueChanged** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): object
The widget's new value.

##### field(e.previousValue): object
The widget's previous value.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Assign a function to perform a custom action when the editor value changes.