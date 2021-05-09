---
id: dxTreeView.Options.onItemHold
type: function(e)
default: null
---
---
##### param(e): Object
Information about the event.

##### field(e.component): dxTreeView
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data object of the item being held.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The index of the item being held. In a grouped list, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The node of the item being held.

---
