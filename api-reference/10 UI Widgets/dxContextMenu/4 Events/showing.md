---
type: eventType
---
---
##### shortDescription
Fires before the context menu is displayed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.cancel): boolean
Specifies whether or not to cancel the showing of the widget.

---
Instead, you can use the [onShowing](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/onShowing.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onShowing') option to handle the event.

#####See Also#####
#include common-link-handleevents