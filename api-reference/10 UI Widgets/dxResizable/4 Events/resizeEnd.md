---
type: eventType
---
---
##### shortDescription
Fires when the widget has been resized.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.width): number
The current widget width.

##### field(e.height): number
The current widget height.

---
Instead, you can use the [onResizeEnd](/api-reference/10%20UI%20Widgets/dxResizable/1%20Configuration/onResizeEnd.md '/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#onResizeEnd') option to handle the event.

#####See Also#####
#include common-link-handleevents