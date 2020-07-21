---
id: dxMap.Options.onClick
type: function(e) | String
default: null
EventForAction: dxMap.click
---
---
##### shortDescription
A function that is executed when any location on the map is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.location): Object
The clicked point's location on the map (if the "google" or "bing" provider is used).

##### field(e.model): Object
Model data. Available only if Knockout is used.

---
