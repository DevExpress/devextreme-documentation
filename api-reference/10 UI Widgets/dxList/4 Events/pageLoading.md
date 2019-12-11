---
type: eventType
---
---
##### shortDescription
Fires before loading the next page when autopaging is enabled.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

---
Instead, you can use the [onPageLoading](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/onPageLoading.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onPageLoading') option to handle the event.

#####See Also#####
#include common-link-handleevents