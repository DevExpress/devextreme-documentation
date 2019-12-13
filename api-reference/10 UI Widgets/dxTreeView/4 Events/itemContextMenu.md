---
id: dxTreeView.itemContextMenu
type: eventType
---
---
##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The target item's data object.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "target item" }

##### field(e.itemIndex): Number | Object
The target item's index.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.node): dxTreeViewNode
The target item's node.

---
