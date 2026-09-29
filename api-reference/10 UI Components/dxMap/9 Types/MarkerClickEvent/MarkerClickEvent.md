---
module: ui/map
export: MarkerClickEvent
type: Object
inherits: EventInfo
uid: ui/map:MarkerAddedEvent
generateTypeLink: 
references: dxMap.Options.markers.onClick
---
---
##### shortDescription
The type of the **markers[]**.[onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick) event handler's argument.

---
Use this type to annotate the argument of a marker's [onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick) handler. Refer to the handler's description for details about the event argument.

The **tooltip** field is only available for the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider). This field contains the marker's [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) instance (or **undefined** if the marker has no tooltip).