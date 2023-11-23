---
id: dxTreeView.Options.onItemRendered
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a collection item is rendered.

##### param(e): ui/tree_view:ItemRenderedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.itemData): Object
The rendered item's data object.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "rendered item" }

##### field(e.itemIndex): Number
The rendered item's index.

##### field(e.node): dxTreeViewNode
The rendered item's node.

---
