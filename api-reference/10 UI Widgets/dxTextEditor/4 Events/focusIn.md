---
type: eventType
---
---
##### shortDescription
Fires after the widget's input has been focused.

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
Use the **on()** method to attach a handler for the **focusIn** event.

To unsubscribe from this event, use the **off()** method.

Note that you can handle the **focusIn** event within the widget's configuration object by assigning your handler to the **onFocusIn** option.

#####See Also#####
#include common-link-handleevents