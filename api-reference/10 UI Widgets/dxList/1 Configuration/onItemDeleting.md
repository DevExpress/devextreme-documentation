---
id: dxList.Options.onItemDeleting
type: function(e)
default: null
hidden: false
EventForAction: dxList.itemDeleting
---
---
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
The item's index. In a grouped list, the index represents an object defining group and item indexes: { group: 0, item: 0 }.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
