---
id: dxTreeView.Options.onItemContextMenu
type: function(e)
default: null
EventForAction: dxTreeView.itemContextMenu
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The target item's data object.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "target item" }

##### field(e.itemIndex): Number | Object
The target item's index.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The target item's node.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/ContextMenuIntegration/"
}