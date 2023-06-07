---
id: dxMap.Options.onMarkerRemoved
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a marker is removed from the map.

##### param(e): Object
Information about the event.

##### field(e.component): dxMap
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.options): Object
The removed marker's data.

---
#####See Also#####
- [Add and Remove a Marker](/concepts/05%20UI%20Components/Map/20%20Configure%20Markers/05%20Add%20and%20Remove.md '/Documentation/Guide/UI_Components/Map/Configure_Markers/Add_and_Remove/')