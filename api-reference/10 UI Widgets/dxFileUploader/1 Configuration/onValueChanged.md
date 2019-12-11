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
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): array
Newly selected files.

##### field(e.previousValue): array
Previously selected files.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Assign a function to perform a custom action when a file or several files are added to or removed from selection.