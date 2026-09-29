---
id: dxMap.Options.markers.onClick
type: function(e)
---
---
##### shortDescription
A callback function performed when the marker is clicked.

##### param(e): ui/map:MarkerClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.location): MapLocation
The clicked marker's coordinates.

##### field(e.tooltip): dxPopover
The clicked marker's Popover instance (only for the *"osm"* provider).

---
If you use the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider), Map also calls this function when a user presses Enter or Space on a focused marker.
