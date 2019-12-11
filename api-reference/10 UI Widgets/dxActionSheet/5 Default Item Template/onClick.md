---
default: null
type: function | string
---
---
##### shortDescription
A handler for the [click](/api-reference/10%20UI%20Widgets/dxButton/4%20Events/click.md '/Documentation/ApiReference/UI_Widgets/dxButton/Events/#click') event raised for the button representing the given action sheet button.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
The jQuery event that caused the action execution.

---
Assign a function to perform a custom action when a button representing an action sheet item is clicked.

To navigate to a specific URL when the **click** event fires for action sheet buttons, assign that URL directly to this option.