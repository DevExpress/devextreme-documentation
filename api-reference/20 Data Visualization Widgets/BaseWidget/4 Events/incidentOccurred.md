---
type: eventType
---
---
##### shortDescription
Raised when an error or warning appears in the widget.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.target): any
Information on the occurred incident.

---
Main article: [onIncidentOccurred](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onIncidentOccurred.md '{basewidgetpath}/Configuration/#onIncidentOccurred')

#####See Also#####
#include common-link-handleevents