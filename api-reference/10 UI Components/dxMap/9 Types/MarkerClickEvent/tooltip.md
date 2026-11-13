---
uid: ui/map:MarkerClickEvent.tooltip
type: dxPopover
---
---
##### shortDescription
The clicked marker's Popover instance.

---
**MarkerClickEvent**.**tooltip** is only available if [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"*. This field contains the [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) instance that displays the marker's [tooltip](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/tooltip/) (or **undefined** if the marker has no tooltip).

Use Popover [properties](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/) and [methods](/Documentation/ApiReference/UI_Components/dxPopover/Methods/) to customize the tooltip (for instance, to display a title or a Close button).

#####See Also#####
- [Customize the OpenStreetMap Provider - Customize Marker Tooltips](/Documentation/Guide/UI_Components/Map/Customize_the_OpenStreetMap_Provider/#Customize_Marker_Tooltips)
