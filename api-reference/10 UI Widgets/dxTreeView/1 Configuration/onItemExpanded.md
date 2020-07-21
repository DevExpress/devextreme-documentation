---
id: dxTreeView.Options.onItemExpanded
type: function(e)
default: null
EventForAction: dxTreeView.itemExpanded
---
---
##### shortDescription
A function that is executed when a tree view item is expanded.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The expanded item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The item's index.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

---
#####See Also#####
- [Expand and Collapse Nodes - Events](/concepts/05%20Widgets/TreeView/20%20Expand%20and%20Collapse%20Nodes/10%20Events.md '/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes/#Events')