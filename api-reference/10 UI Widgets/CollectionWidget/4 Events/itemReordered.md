---
id: CollectionWidget.itemReordered
type: eventType
hidden: 
---
---
##### shortDescription
Raised after a collection item is moved to another position.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fromIndex): Number
The item's previous index.

##### field(e.itemData): Object
The reordered item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The index of the item after reordering. This field holds the same value as **toIndex**.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.toIndex): Number
The item's current index.

---
Main article: [onItemReordered](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemReordered.md '{basewidgetpath}/Configuration/#onItemReordered')

#####See Also#####
#include common-link-handleevents