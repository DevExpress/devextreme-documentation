---
type: eventType
---
---
##### shortDescription
Raised when a route is created on the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The added route's data.

##### field(e.originalRoute): Object
The original route that the current map provider uses (only for "google" and "bing" providers).

---
Main article: [onRouteAdded](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onRouteAdded.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onRouteAdded')

#####See Also#####
#include common-link-handleevents