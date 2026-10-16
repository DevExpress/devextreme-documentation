If **calculateRoute** fails, the Map does not display a route, and the [addRoute(routeOptions)](/Documentation/ApiReference/UI_Components/dxMap/Methods/#addRouterouteOptions) promise resolves with `undefined`:

    <!--JavaScript-->
    const route = await mapInstance.addRoute(routeOptions);
    if (!route) {
        // Notify users that the route is unavailable
    }

Alternatively, assign the following function to **calculateRoute** to draw straight lines between route waypoints if a routing request fails:

    <!--JavaScript-->
    async function calculateRouteWithFallback(params) {
        try {
            return await calculateRoute(params);
        } catch {
            return params.locations.map(({ lat, lng }) => [lat, lng]);
        }
    }
