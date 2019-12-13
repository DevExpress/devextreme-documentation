---
id: CollectionWidget.itemDeleting
type: eventType
hidden: 
---
---
##### shortDescription
Raised before a collection item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean | Promise<void>
Allows you to cancel the item deletion.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The data of the item to be removed.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemDeleting](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleting.md '{basewidgetpath}/Configuration/#onItemDeleting')

#####See Also#####
#include common-link-handleevents