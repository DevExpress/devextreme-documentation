---
id: CollectionWidget.itemHold
type: eventType
---
---
##### shortDescription
Raised when a collection item has been held for a [specified period](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/itemHoldTimeout.md '{basewidgetpath}/Configuration/#itemHoldTimeout').

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
Main article: [onItemHold](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemHold.md '{basewidgetpath}/Configuration/#onItemHold')

#####See Also#####
#include common-link-handleevents