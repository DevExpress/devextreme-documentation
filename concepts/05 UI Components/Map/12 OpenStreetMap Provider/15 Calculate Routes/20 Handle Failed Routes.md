If **calculateRoute** fails, the Map does not display a route. The [addRoute(routeOptions)](/api-reference/10%20UI%20Components/dxMap/3%20Methods/addRoute(routeOptions).md '/Documentation/ApiReference/UI_Components/dxMap/Methods/#addRouterouteOptions') promise resolves with `undefined`:

    <!--JavaScript-->
    const route = await mapInstance.addRoute(routeOptions);
    if (!route) {
        // Notify users that the route is unavailable
    }

You can assign the following function to **calculateRoute** to draw straight lines between route waypoints if a routing request fails:

    <!--JavaScript-->
    async function calculateRouteWithFallback(params) {
        try {
            return await calculateRoute(params);
        } catch {
            return params.locations.map(({ lat, lng }) => [lat, lng]);
        }
    }
