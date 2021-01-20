---
id: dxTreeView.Options.onItemRendered
type: function(e)
default: null
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

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
