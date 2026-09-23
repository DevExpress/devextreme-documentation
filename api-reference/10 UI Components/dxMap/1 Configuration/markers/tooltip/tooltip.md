---
id: dxMap.Options.markers.tooltip
type: String | Object
---
---
##### shortDescription
A tooltip to be used for the marker.

---
This property takes on an object containing the **text** and **isShown** fields. The **text** field specifies the tooltip text. The **isShown** field takes on a Boolean value that specifies whether a tooltip is visible by default or not. If the tooltip should be hidden by default, pass the tooltip text directly to the tooltip property.

For **osm**, tooltips use [Popover](/api-reference/10%20UI%20Components/dxPopover '/Documentation/ApiReference/UI_Components/dxPopover/'). See [Customize Marker Tooltips](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/20%20Customize%20Marker%20Tooltips.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Customize_Marker_Tooltips/') to configure its instance in **markers[].onClick**.