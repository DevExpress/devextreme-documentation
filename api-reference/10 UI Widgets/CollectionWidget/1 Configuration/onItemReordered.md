---
id: CollectionWidget.Options.onItemReordered
type: function(e)
default: null
hidden: 
EventForAction: CollectionWidget.itemReordered
---
---
##### shortDescription
A function that is executed after a collection item is moved to another position.

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
