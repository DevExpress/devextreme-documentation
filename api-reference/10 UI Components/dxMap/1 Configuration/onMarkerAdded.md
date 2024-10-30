---
id: dxMap.Options.onMarkerAdded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a marker is created on the map.

##### param(e): ui/map:MarkerAddedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.options): Object
The added marker's data.

##### field(e.originalMarker): Object
The original marker that the current map provider uses (only for "google" provider).

---
#####See Also#####
- [Add and Remove a Marker](/concepts/05%20UI%20Components/Map/20%20Configure%20Markers/05%20Add%20and%20Remove.md '/Documentation/Guide/UI_Components/Map/Configure_Markers/Add_and_Remove/')