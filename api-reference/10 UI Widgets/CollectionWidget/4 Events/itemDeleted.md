---
id: CollectionWidget.itemDeleted
type: eventType
hidden: 
---
---
##### shortDescription
Raised after a collection item is deleted from the data source.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The removed item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The removed item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemDeleted](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemDeleted.md '{basewidgetpath}/Configuration/#onItemDeleted')

#####See Also#####
#include common-link-handleevents