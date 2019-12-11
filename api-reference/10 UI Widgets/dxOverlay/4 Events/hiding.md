---
type: eventType
---
---
##### shortDescription
Raised before the widget is hidden.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.cancel): Boolean
Allows you to cancel overlay hiding.

---
Main article: [onHiding](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/onHiding.md '{basewidgetpath}/Configuration/#onHiding')

#####See Also#####
#include common-link-handleevents