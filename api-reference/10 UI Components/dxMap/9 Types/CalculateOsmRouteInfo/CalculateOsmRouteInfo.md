---
id: CalculateOsmRouteInfo
module: ui/map
export: CalculateOsmRouteInfo
type: Object
generateTypeLink: 
---
---
##### shortDescription
Information about a route that the **providerConfig**.[calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute) function calculates.

---
**CalculateOsmRouteInfo** contains the following fields:

- **locations**: Route waypoints in the order you specify them (two or more [MapLocation](/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/) objects)
- **mode**: The route's transportation [mode](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/#mode) (*"driving"* if the route does not specify a mode)

Map converts [route locations](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/) specified as strings or arrays to **MapLocation** objects before the component calls **calculateRoute**. Address strings require the [calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) function.

Map passes the **mode** value as is. If your routing service uses other transportation mode identifiers, convert **mode** in your **calculateRoute** implementation.