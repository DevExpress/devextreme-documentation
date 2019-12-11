---
default: 1
type: Number
---
---
##### shortDescription
The zoom level of the map.

---
By default, the widget sets the automatically calculated zoom value each time a marker or a route is added to the map. In this case, **zoom** is set to the maximum value, allowing all markers and routes to be displayed at the same time. Set the [autoAdjust](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/autoAdjust.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#autoAdjust') option to *false* to disable this behavior.

Note that if the **autoAdjust** option is set to *true*, the zoom level can only be decreased to display all markers and routes. If the current zoom level and center position allow all routes and markers to be displayed on the map, they remain unchanged.