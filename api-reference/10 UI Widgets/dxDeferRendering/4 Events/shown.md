---
type: eventType
---
---
##### shortDescription
Fires when widget content is shown and animation has completed.

##### param(e): object
Provides function parameters.

##### field(e.component): object
A root element of the shown markup.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onShown](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onShown.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onShown') option to handle the event.

#####See Also#####
#include common-link-handleevents