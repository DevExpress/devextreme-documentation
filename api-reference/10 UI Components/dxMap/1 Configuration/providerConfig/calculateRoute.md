---
id: dxMap.Options.providerConfig.calculateRoute
type: function(params)
---
---
##### shortDescription
Calculates route geometry if [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') is *"osm"*.

##### param(params): CalculateOsmRouteInfo
Information about the route to calculate.

##### return: PromiseLike
A promise that resolves with the route geometry ([OsmRouteResult](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmRouteResult '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/')).

---
The Map does not include a routing service. Implement this function to return route geometry from an external routing service or from predefined coordinates. The Map calls this function for each [routes[]](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/) item that contains two or more [locations](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/routes/locations '/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/'). The Map converts locations specified as strings or arrays to [MapLocation](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapLocation '/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/') objects before the component calls **calculateRoute**.

The Map does not display route geometry in the following instances:

- **calculateRoute** is not specified
- The Map cannot convert a route location to coordinates
- The promise is rejected or resolves with an invalid **OsmRouteResult** value

#####See Also#####
- [OpenStreetMap Provider - Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes/00%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/#Calculate_Routes')
