---
type: eventType
---
---
##### shortDescription
Fires after resizing has been started.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onResizeStart](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/onResizeStart.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#onResizeStart') option to handle the event.

#####See Also#####
#include common-link-handleevents