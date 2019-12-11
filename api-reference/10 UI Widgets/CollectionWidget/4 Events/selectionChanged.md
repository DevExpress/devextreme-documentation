---
type: eventType
---
---
##### shortDescription
Fires after a collection item is selected or unselected.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.addedItems): array<any>
The data of the items that have been selected.

##### field(e.removedItems): array<any>
The data of the items whose selection has been canceled.

---
Main article: [onSelectionChanged](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onSelectionChanged.md '{basewidgetpath}/Configuration/#onSelectionChanged')

#####See Also#####
#include common-link-handleevents