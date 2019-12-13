---
id: dxMap.Options.onReady
type: function(e)
default: null
EventForAction: dxMap.ready
---
---
##### shortDescription
A function that is executed when the map is ready.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.originalMap): Object
The current provider's map data.

---
