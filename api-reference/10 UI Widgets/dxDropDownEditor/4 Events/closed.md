---
type: eventType
---
---
##### shortDescription
Fires after a drop-down list has been hidden.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onClosed](/api-reference/10%20UI%20Widgets/dxDropDownEditor/1%20Configuration/onClosed.md '{basewidgetpath}/Configuration/#onClosed') option to handle the event.

#####See Also#####
#include common-link-handleevents