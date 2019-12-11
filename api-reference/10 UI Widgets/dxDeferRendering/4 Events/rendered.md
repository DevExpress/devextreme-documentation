---
type: eventType
---
---
##### shortDescription
Fires when the widget's content has finished rendering but is not yet shown.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onRendered](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onRendered.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onRendered') option to handle the event.

#####See Also#####
#include common-link-handleevents