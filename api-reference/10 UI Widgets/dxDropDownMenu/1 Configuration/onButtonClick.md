---
EventForAction: ..\4 Events\buttonClick.md
default: null
type: function | string
---
---
##### shortDescription
A handler for the **buttonClick** event.

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
Assign a function to perform a custom action when the button that invokes the drop down menu is clicked.

To navigate to a specific URL when the **buttonClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.