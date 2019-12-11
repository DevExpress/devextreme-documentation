---
type: eventType
---
---
##### shortDescription
Fires before the context menu is hidden.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.cancel): boolean
Allows you to cancel widget hiding.

---
Instead, you can use the [onHiding](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/onHiding.md '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onHiding') option to handle the event.

#####See Also#####
#include common-link-handleevents