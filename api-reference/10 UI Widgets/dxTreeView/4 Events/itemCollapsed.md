---
id: dxTreeView.itemCollapsed
type: eventType
---
---
##### shortDescription
Raised when a tree view item is collapsed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The collapsed item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The item's index.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The item's node.

---
Main article: [onItemCollapsed](/api-reference/10%20UI%20Widgets/dxTreeView/1%20Configuration/onItemCollapsed.md '/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#onItemCollapsed')

#####See Also#####
#include common-link-handleevents