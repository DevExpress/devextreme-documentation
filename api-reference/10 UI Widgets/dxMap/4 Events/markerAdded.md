---
type: eventType
---
---
##### shortDescription
Fires after a marker is added to the map.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.options): object
The added marker's data.

##### field(e.originalMarker): object
The original marker that the current map provider uses (only for 'google' and 'bing' providers).

---
Instead, you can use the [onMarkerAdded](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerAdded') option to handle the event.

#####See Also#####
#include common-link-handleevents