---
EventForAction: ..\4 Events\shown.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **shown** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action after the widget is shown.