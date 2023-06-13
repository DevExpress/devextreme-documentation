---
id: dxTreeView.Options.onItemClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a collection item is clicked or tapped.

##### param(e): ui/tree_view:ItemClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data object.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "clicked item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The clicked item's node.

---
