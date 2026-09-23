Implement [providerConfig.calculateRoute](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/calculateRoute.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute') to display routes with the **osm** provider. DevExtreme and OpenLayers do not calculate a road or walking path for you.

The callback receives at least two resolved [MapLocation](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapLocation '/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/') waypoints and the requested **mode**. Add [calculateLocation](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/10%20Calculate%20Locations.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Locations/') if waypoints contain addresses or place names.

## Connect a Routing Service

This example calls an application-owned **/api/route** endpoint. It accepts JSON with **locations** and **mode**, and returns a GeoJSON LineString geometry. Your service adapter must translate these fields and extract the geometry from its response.

    <!--TypeScript-->
    import type {
        CalculateOsmRouteInfo,
        OsmGeoJsonLineString
    } from 'devextreme/ui/map';

    async function calculateRoute(
        params: CalculateOsmRouteInfo
    ): Promise<OsmGeoJsonLineString> {
        const response = await fetch('/api/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
        });
        if (!response.ok) {
            throw new Error('The routing request failed.');
        }
        return response.json();
    }

The callback returns **PromiseLike<OsmRouteResult>**. A native promise is supported. Check your service's transportation modes: **"walking"** and **"driving"** may need to be mapped to different identifiers.

Assign the function and specify routes as usual:

    <!--JavaScript-->
    $('#map').dxMap({
        provider: 'osm',
        height: 400,
        center: { lat: 40.7580, lng: -73.9855 },
        zoom: 13,
        providerConfig: {
            tileServer,
            calculateLocation,
            calculateRoute
        },
        routes: [{
            locations: [
                'Empire State Building, New York',
                { lat: 40.7681, lng: -73.9819 }
            ],
            mode: 'walking',
            color: '#1564c0',
            opacity: 0.8,
            weight: 5
        }, {
            locations: [
                [40.7484, -73.9857],
                '40.7527, -73.9772'
            ],
            mode: 'driving',
            color: '#b71c1c',
            opacity: 0.7,
            weight: 3
        }]
    });

The location formats can be mixed within a route. **autoAdjust** fits the successfully created markers and route geometries. Set it to **false** if your application controls the view.

For ASP.NET Core, use **.CalculateRoute("calculateRoute")** inside **.ProviderConfig(...)**. The JavaScript function calls your routing endpoint.

## Return the Correct Geometry

The two accepted result formats use different coordinate orders:

| Result | Position Order | Example |
| --- | --- | --- |
| Array of pairs | [latitude, longitude] | [[40.7484, -73.9857], [40.7681, -73.9819]] |
| GeoJSON LineString geometry | [longitude, latitude] | { type: "LineString", coordinates: [[-73.9857, 40.7484], [-73.9819, 40.7681]] } |

These short arrays illustrate the formats, not a calculated street route. Return the complete geometry from your routing service to follow roads or paths.

Both formats require at least two finite positions. Latitude must be between -90 and 90 degrees. Plain pairs contain exactly two components. GeoJSON positions can contain additional components, such as altitude, which the Map ignores.

The callback does not accept a GeoJSON Feature, FeatureCollection, MultiLineString, or an entire service response. Extract the LineString geometry first.

## Handle Failed Routes

The Map skips a route in these cases:

- It has fewer than two usable waypoints.
- A waypoint cannot be resolved.
- **calculateRoute** is missing, fails, or returns invalid geometry.

A missing callback produces **W1033**. Callback failures and invalid results produce **W1006**. The Map does not substitute a straight line for a failed calculation. A skipped route does not raise **onRouteAdded**.

Successful routes expose an OpenLayers Feature with LineString geometry through **onRouteAdded.originalRoute** and **addRoute(...)**. Pass the original route configuration object or its index to **removeRoute(...)**, not the native Feature. A failed item may resolve without a route instance.

Use **color**, **opacity**, and **weight** to style each route independently. A weight of **0** hides its stroke without removing the route.
