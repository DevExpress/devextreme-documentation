---
type: eventType
---
---
##### shortDescription
Raised before a submenu is hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.rootItem): dxElement
The container of the root menu element. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.cancel): Boolean
Allows you to cancel submenu hiding.

---
Main article: [onSubmenuHiding](/api-reference/10%20UI%20Widgets/dxMenu/1%20Configuration/onSubmenuHiding.md '/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onSubmenuHiding')

#####See Also#####
#include common-link-handleevents