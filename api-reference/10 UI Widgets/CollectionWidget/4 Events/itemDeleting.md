---
hidden: 
type: eventType
---
---
##### shortDescription
Raised before an item is deleted from the data source.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The data of the item to be removed.

##### field(e.itemElement): dxElement
The item's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.itemIndex): number | object
The item's index.

##### field(e.cancel): boolean | Promise<void>
Allows you to cancel the item deletion.

---
Main article: [onItemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleting.md '{basewidgetpath}/Configuration/#onItemDeleting')

#####See Also#####
#include common-link-handleevents