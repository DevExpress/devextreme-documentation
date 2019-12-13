---
id: dxTreeView.itemSelectionChanged
type: eventType
---
---
##### shortDescription
Raised when a tree view item is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

---
Main article: [onItemSelectionChanged](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemSelectionChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemSelectionChanged')

#####See Also#####
#include common-link-handleevents