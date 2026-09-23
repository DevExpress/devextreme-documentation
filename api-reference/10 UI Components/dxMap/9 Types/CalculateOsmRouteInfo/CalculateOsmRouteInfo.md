---
id: CalculateOsmRouteInfo
module: ui/map
export: CalculateOsmRouteInfo
type: Object
generateTypeLink:
---
---
##### shortDescription
Describes the argument passed to **providerConfig.calculateRoute**.

---
| Field | Type | Description |
| --- | --- | --- |
| locations | Array&lt;MapLocation&gt; | Resolved waypoints in their original order. Each object contains **lat** and **lng** in degrees. |
| mode | RouteMode \| String | The requested transportation mode. Standard values are **"driving"** and **"walking"**. Map any custom string to a mode supported by your service. |

The callback receives at least two resolved waypoints. See [Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Routes/').
