---
id: CollectionWidget.itemClick
type: eventType
---
---
##### shortDescription
Raised when a collection item is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Main article: [onItemClick](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/onItemClick.md '{basewidgetpath}/Configuration/#onItemClick').

#####See Also#####
#include common-link-handleevents