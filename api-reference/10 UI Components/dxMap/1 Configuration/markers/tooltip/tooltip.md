---
id: dxMap.Options.markers.tooltip
type: String | Object
---
---
##### shortDescription
A tooltip to be used for the marker.

---
This property takes on an object containing the **text** and **isShown** fields. The **text** field specifies the tooltip text. The **isShown** field takes on a Boolean value that specifies whether a tooltip is visible by default or not. If the tooltip should be hidden by default, pass the tooltip text directly to the tooltip property.

If [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"*, the Map displays tooltips in [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) instances. To customize these instances, use the **e.tooltip** field in **markers[]**.[onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick).
