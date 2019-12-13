---
id: CollectionWidget.Options.onItemHold
type: function(e)
default: null
EventForAction: CollectionWidget.itemHold
---
---
##### shortDescription
A function that is executed when a collection item has been held for a [specified period](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '{basewidgetpath}/Configuration/#itemHoldTimeout').

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data of the item being held.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
