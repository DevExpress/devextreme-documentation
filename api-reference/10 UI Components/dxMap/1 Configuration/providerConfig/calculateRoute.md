---
id: dxMap.Options.providerConfig.calculateRoute
type: function(params)
---
---
##### shortDescription
Calculates route geometry for the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider).

##### param(params): CalculateOsmRouteInfo
Information about the route to calculate.

##### return: PromiseLike
A promise that resolves with the route geometry ([OsmRouteResult](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/)).

---
Map does not include a routing service. Implement this function to return route geometry from an external routing service or from predefined coordinates. Map calls this function for each [routes[]](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/) item that contains two or more [locations](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/). Map converts locations specified as strings or arrays to [MapLocation](/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/) objects before the component calls **calculateRoute**.

Map does not display route geometry in the following instances:

- **calculateRoute** is not specified
- Map cannot convert a route location to coordinates
- The promise is rejected or resolves with an invalid **OsmRouteResult** value
