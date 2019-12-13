---
id: dxDropDownMenu.Options.onItemClick
type: function(e) | String
default: null
EventForAction: dxDropDownMenu.itemClick
---
---
##### shortDescription
A function that is executed when a menu item is clicked or tapped.

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
