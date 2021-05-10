---
id: dxTreeView.Options.onItemContextMenu
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
The target item's data object.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "target item" }

##### field(e.itemIndex): Number | Object
The target item's index.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The target item's node.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ContextMenuIntegration/"
}