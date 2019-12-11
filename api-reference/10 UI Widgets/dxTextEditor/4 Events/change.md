---
type: eventType
---
---
##### shortDescription
Fires when a change within the widget's input element is committed by an end user.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

---
Instead, you can use the [onChange](/api-reference/10%20UI%20Widgets/dxTextEditor/1%20Configuration/onChange.md '{basewidgetpath}/Configuration/#onChange') option to handle the event.

#####See Also#####
#include common-link-handleevents