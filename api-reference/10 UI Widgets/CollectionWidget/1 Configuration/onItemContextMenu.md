---
id: CollectionWidget.Options.onItemContextMenu
type: function(e)
default: null
EventForAction: CollectionWidget.itemContextMenu
---
---
##### shortDescription
A function that is executed when a collection item is right-clicked or pressed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
