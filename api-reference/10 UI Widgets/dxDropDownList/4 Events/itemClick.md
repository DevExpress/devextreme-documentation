---
id: dxDropDownList.itemClick
type: eventType
---
---
##### shortDescription
Raised when a list item is clicked or tapped.

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

##### field(e.itemElement): Object
The item's container.

##### field(e.itemIndex): Number | Object
The clicked item's index. If the widget items are grouped, the index represents an object defining the group and item indexes: { group: 0, item: 0 }.

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
Main article: [onItemClick](/api-reference/10%20UI%20Widgets/dxDropDownList/1%20Configuration/onItemClick.md '{basewidgetpath}/Configuration/#onItemClick')

#####See Also#####
#include common-link-handleevents