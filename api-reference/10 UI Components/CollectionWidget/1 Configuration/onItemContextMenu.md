---
id: CollectionWidget.Options.onItemContextMenu
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a collection item is right-clicked or pressed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The item's index.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
