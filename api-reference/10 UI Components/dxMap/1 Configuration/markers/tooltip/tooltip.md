---
id: dxMap.Options.markers.tooltip
type: String | Object
---
---
##### shortDescription
A tooltip to be used for the marker.

---
This property takes an object that contains **text** and **isShown** fields. The **text** field specifies the tooltip text. The **isShown** field takes a Boolean value that specifies whether a tooltip is visible by default. If the tooltip should be hidden by default, pass the tooltip text directly to the tooltip property.

If [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"*, the Map displays tooltips in [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) instances. To customize these instances, use the **e.tooltip** field in **markers[]**.[onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick).
