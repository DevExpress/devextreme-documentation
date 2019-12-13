---
id: dxTabPanel.Options.onTitleClick
type: function(e) | String
default: null
EventForAction: dxTabPanel.titleClick
---
---
##### shortDescription
A function that is executed when a tab is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The data of the item whose title is clicked.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
