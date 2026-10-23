---
id: CalculateOsmRouteInfo
module: ui/map
export: CalculateOsmRouteInfo
type: Object
generateTypeLink: 
---
---
##### shortDescription
Information about a route that the **providerConfig**.[calculateRoute](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/calculateRoute.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute') function calculates.

---
**CalculateOsmRouteInfo** contains the following fields:

- **locations**: Route waypoints in the order you specify them (two or more [MapLocation](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapLocation '/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/') objects)
- **mode**: The route's transportation [mode](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/routes/mode.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/#mode') (*"driving"* if the route does not specify a mode)

The Map converts [route locations](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/routes/locations '/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/') specified as strings or arrays to **MapLocation** objects before the component calls **calculateRoute**. Address strings require the [calculateLocation](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/calculateLocation.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation') function.

The Map passes the **mode** value as is. If your routing service uses other transportation mode identifiers, convert **mode** in your **calculateRoute** implementation.