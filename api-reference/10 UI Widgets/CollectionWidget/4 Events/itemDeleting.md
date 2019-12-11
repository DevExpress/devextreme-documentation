---
hidden: 
type: eventType
---
---
##### shortDescription
Raised before an item is deleted from the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
Provides access to the [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.itemData): object
The data of the to-be-deleted item.

##### field(e.itemElement): jQuery
The item's container.

##### field(e.itemIndex): number | object
The index of the to-be-deleted item.

##### field(e.cancel): boolean | Promise
Allows you to cancel the item deletion.

---
Main article: [onItemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleting.md '{basewidgetpath}/Configuration/#onItemDeleting')

#####See Also#####
#include common-link-handleevents