---
type: eventType
---
---
##### shortDescription
Fires when the widget's content has finished rendering but is not yet shown.

##### param(e): object
Provides function parameters.

##### field(e.component): object
A root element of the rendered markup.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

---
Instead, you can use the [onRendered](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onRendered.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents