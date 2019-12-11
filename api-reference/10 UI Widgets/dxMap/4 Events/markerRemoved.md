---
type: eventType
---
---
##### shortDescription
Raised when a marker is removed from the map.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.options): Object
The removed marker's data.

---
Main article: [onMarkerRemoved](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onMarkerRemoved.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onMarkerRemoved')

#####See Also#####
#include common-link-handleevents