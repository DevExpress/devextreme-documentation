---
EventForAction: ..\4 Events\cancelClick.md
default: null
type: function | string
---
---
##### shortDescription
A handler for the [cancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/4%20Events/cancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Events/#cancelClick') event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
Indicates whether or not to cancel hiding the action sheet menu when clicking the Cancel button.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.cancel): boolean
Specifies whether or not to cancel hiding the action sheet.

---
Assign a function to perform a custom action when clicking the Cancel button. Use the **cancel** field of the object passed as a function parameter. Set this field to *true* to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

To navigate to a specific URL when the **cancelClick** event fires, assign that URL or the anchor part (#) of that URL directly to this option as a string.