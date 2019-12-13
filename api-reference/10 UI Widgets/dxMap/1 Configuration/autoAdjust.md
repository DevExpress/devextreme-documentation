---
id: dxMap.Options.autoAdjust
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the widget automatically adjusts [center](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#center') and [zoom](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom') option values when adding a new marker or route, or if a new widget contains markers or routes by default.

---
If **autoAdjust** is enabled, **zoom** is set to the maximum value allowing all markers and routes to be displayed at the same time. The **center** is changed so that markers and routes are aligned with the widget's center. Set the **autoAdjust** option to **false** to disable this behavior.

Note that the zoom level can only be automatically decreased to display all markers and routes. If the current zoom level allows all routes and markers to be displayed on the map, it remains unchanged.