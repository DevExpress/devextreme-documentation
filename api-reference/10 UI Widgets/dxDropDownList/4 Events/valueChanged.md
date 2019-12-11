---
type: eventType
---
---
##### shortDescription
Fires when the editor value changes.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.value): object
Returns the widget's new value.

##### field(e.previousValue): object
Returns the widget's previous value.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Instead, you can use the [onValueChanged](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onValueChanged.md '{basewidgetpath}/Configuration/#onValueChanged') option to handle the event.

#####See Also#####
#include common-link-handleevents