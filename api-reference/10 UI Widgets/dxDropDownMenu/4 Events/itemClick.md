---
id: dxDropDownMenu.itemClick
type: eventType
---
---
##### shortDescription
Raised when a menu item is clicked or tapped.

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
The item's index.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onItemClick]({basewidgetpath}/Configuration/#onItemClick)

#####See Also#####
#include common-link-handleevents