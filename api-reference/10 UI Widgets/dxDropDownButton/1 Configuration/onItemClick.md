---
id: dxDropDownButton.Options.onItemClick
type: function(e) | String
default: null
EventForAction: dxDropDownButton.itemClick
---
---
##### shortDescription
A function that is executed when a drop-down menu item is clicked.

##### param(e): Object
Information about the event that caused the function to execute.

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

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
