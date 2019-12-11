---
type: eventType
---
---
##### shortDescription
Fires when the button that invokes the drop down menu is clicked.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused the action execution.

---
Instead, you can use the [onButtonClick]({basewidgetpath}/Configuration/#onButtonClick) option to handle the event.

#####See Also#####
#include common-link-handleevents