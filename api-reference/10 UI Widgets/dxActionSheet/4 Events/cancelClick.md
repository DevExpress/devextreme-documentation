---
type: eventType
---
---
##### shortDescription
Fires when the **Cancel** button is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
Indicates whether or not to cancel hiding the action sheet menu when clicking the Cancel button.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.cancel): boolean
Indicates whether or not to cancel hiding the action sheet when the Cancel button is clicked.

---
In the handling function, use the **cancel** field of the object passed as a handler parameter. Set this field to **true** to prohibit the hiding of the action sheet menu when an end user clicks the Cancel button on it.

Instead, you can use the [onCancelClick](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/onCancelClick.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#onCancelClick') option to handle the event.

#####See Also#####
#include common-link-handleevents