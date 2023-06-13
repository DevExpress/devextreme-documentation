---
id: dxList.Options.onItemDeleting
type: function(e)
default: null
hidden: false
---
---
##### shortDescription
A function that is executed before a collection item is deleted from the data source.

##### param(e): ui/list:ItemDeletingEvent
Information about the event.

##### field(e.cancel): Boolean
Allows you to cancel the item deletion.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): any
The data of the item to be removed.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number | Object
The item's index. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
