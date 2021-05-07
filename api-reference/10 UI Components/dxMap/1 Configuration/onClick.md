---
id: dxMap.Options.onClick
type: function(e) | String
default: null
---
---
##### shortDescription
A function that is executed when any location on the map is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.location): Object
The clicked point's location on the map (if the "google" or "bing" provider is used).

##### field(e.model): any
Model data. Available only if Knockout is used.

---
