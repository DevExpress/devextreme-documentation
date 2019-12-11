---
type: eventType
---
---
##### shortDescription
Fires after a marker is added to the map.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.options): object
Returns the object that defines the currently added marker in the "markers" array.

##### field(e.originalMarker): object
Returns an original marker object used by the current map provider (only for 'google' and 'bing' providers).

---
Instead, you can use the [onMarkerAdded](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerAdded') option to handle the event.

#####See Also#####
#include common-link-handleevents