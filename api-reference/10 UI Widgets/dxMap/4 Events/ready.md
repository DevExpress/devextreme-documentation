---
type: eventType
---
---
##### shortDescription
Raised when the map is ready.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.originalMap): Object
The current provider's map data.

---
Main article: [onReady](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onReady.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onReady')

#####See Also#####
#include common-link-handleevents