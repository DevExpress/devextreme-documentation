---
type: eventType
---
---
##### shortDescription
Fires after a map is rendered.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.originalMap): object
The current provider's map data.

---
Instead, you can use the [onReady](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/onReady.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#onReady') option to handle the event.

#####See Also#####
#include common-link-handleevents