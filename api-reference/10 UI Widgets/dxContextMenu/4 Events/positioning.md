---
type: eventType
---
---
##### shortDescription
Fires before the context menu is positioned.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.jQueryEvent): jQueryEvent
Returns a jQuery event that caused the event.

##### field(e.position): position
An object that holds context menu positioning options.

---
Instead, you can use the [onPositioning](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/onPositioning.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onPositioning') option to handle the event.

#####See Also#####
#include common-link-handleevents