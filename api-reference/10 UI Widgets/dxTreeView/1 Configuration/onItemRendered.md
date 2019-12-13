---
id: dxTreeView.Options.onItemRendered
type: function(e)
default: null
EventForAction: dxTreeView.itemRendered
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemData): Object
The rendered item's data object.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "rendered item" }

##### field(e.itemIndex): Number
The rendered item's index.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The rendered item's node.

---
