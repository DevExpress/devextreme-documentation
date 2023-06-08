---
id: dxTreeView.Options.onItemHold
type: function(e)
default: null
---
---
##### param(e): ui/tree_view:ItemHoldEvent
Information about the event.

##### field(e.component): {WidgetName}
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
The item's index.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The node of the item being held.

---
