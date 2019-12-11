---
type: eventType
---
---
##### shortDescription
Fires after a map is rendered.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.originalMap): object
Returns the provider's map instance.

---
Instead, you can use the [onReady](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onReady.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onReady') option to handle the event.

#####See Also#####
#include common-link-handleevents