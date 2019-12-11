---
type: eventType
---
---
##### shortDescription
Fires after a marker is removed from the map.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently removed marker in the "markers" array.

---
Instead, you can use the [onMarkerRemoved](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerRemoved') option to handle the event.

#####See Also#####
#include common-link-handleevents