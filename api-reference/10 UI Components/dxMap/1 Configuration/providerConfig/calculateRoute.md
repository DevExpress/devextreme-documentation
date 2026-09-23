---
id: dxMap.Options.providerConfig.calculateRoute
type: function(params)
---
---
##### shortDescription
Calculates route geometry for the **osm** provider.

##### param(params): CalculateOsmRouteInfo
The resolved waypoints and requested transportation mode.

##### return: PromiseLike
A promise that resolves with the route geometry.

---
Implement this callback to display routes. The Map resolves location strings before it calls this function. Your routing service must support or map the requested transportation mode.

Return a native Promise or another compatible thenable that resolves with an [OsmRouteResult](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmRouteResult '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/'). The Map skips a route if a waypoint cannot be resolved, the callback fails, or its result is invalid. It does not substitute straight lines between the waypoints.

See [Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Routes/') for supported formats and a service integration example.
