---
type: eventType
---
---
##### shortDescription
Fires each time the widget is resized by one pixel.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onResize](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/onResize.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#onResize') option to handle the event.

#####See Also#####
#include common-link-handleevents