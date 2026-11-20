---
id: dxMap.Options.markers.tooltip
type: String | Object
---
---
##### shortDescription
A marker tooltip.

---
This property takes an object that contains **text** and **isShown** fields. The **text** field specifies the tooltip text. The **isShown** field takes a Boolean value that specifies whether a tooltip is visible by default. If the tooltip should be hidden by default, pass the tooltip text directly to the tooltip property.

If [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') is *"osm"*, the Map displays tooltips in [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/') instances. To customize these instances, use the **e.tooltip** field in **markers[]**.[onClick](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/markers/onClick.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/#onClick').

#####See Also#####
- [Customize the OpenStreetMap Provider - Customize Marker Tooltips](/concepts/05%20UI%20Components/Map/13%20Customize%20the%20OpenStreetMap%20Provider/05%20Customize%20Marker%20Tooltips/00%20Customize%20Marker%20Tooltips.md '/Documentation/Guide/UI_Components/Map/Customize_the_OpenStreetMap_Provider/#Customize_Marker_Tooltips')
