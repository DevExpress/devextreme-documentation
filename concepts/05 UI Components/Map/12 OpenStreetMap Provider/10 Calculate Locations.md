The **osm** provider accepts the same location formats as other Map providers:

    <!--JavaScript-->
    const coordinateObject = { lat: 40.7484, lng: -73.9857 };
    const coordinateArray = [40.7484, -73.9857];
    const coordinateString = '40.7484, -73.9857';
    const placeName = 'Empire State Building, New York';

Objects, arrays, and numeric coordinate strings do not require geocoding. For other strings, implement [providerConfig.calculateLocation](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/calculateLocation.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation'). The Map does not choose a geocoding service automatically.

## Connect a Geocoding Service

The following adapter calls an application-owned endpoint, **/api/geocode?q=...**. In this example, the endpoint returns **{ lat: number, lng: number }** on success and HTTP **404** if no location is found. Adapt the URL and response parsing to your service.

    <!--TypeScript-->
    import type { MapLocation } from 'devextreme/ui/map';

    async function calculateLocation(query: string): Promise<MapLocation | undefined> {
        const response = await fetch('/api/geocode?' + new URLSearchParams({ q: query }));
        if (response.status === 404) {
            return undefined;
        }
        if (!response.ok) {
            throw new Error('The geocoding request failed.');
        }

        const result = await response.json();
        const lat = Number(result.lat);
        const lng = Number(result.lng);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
            return undefined;
        }
        return { lat, lng };
    }

Assign the function to **providerConfig.calculateLocation**. It is used for addresses in the map center, markers, and route waypoints. The callback accepts a string and returns a **PromiseLike<MapLocation | undefined>**; native promises are supported.

For jQuery, configure the callback with your existing tile source:

    <!--JavaScript-->
    $('#map').dxMap({
        provider: 'osm',
        height: 400,
        center: 'Empire State Building, New York',
        zoom: 14,
        providerConfig: { tileServer, calculateLocation },
        markers: [{
            location: 'Empire State Building, New York',
            tooltip: 'Empire State Building'
        }]
    });

For the ASP.NET Core builder, expose the function to the page and use **.CalculateLocation("calculateLocation")** inside **.ProviderConfig(...)**. The callback runs in the browser and returns a JavaScript promise, not a C# Task.

## Handle Unresolved Locations

An address that requires a missing callback produces **W1031**. A failed callback or invalid result produces **W1006**.

An unresolved center or marker location falls back to **{ lat: 0, lng: 0 }**. To avoid a marker at that location, validate addresses in your application before adding them. An unresolved route waypoint instead causes the route to be skipped; it is not replaced with zero coordinates.

Do not return a geocoding service's complete response. Extract a single location in geographic degrees. Do not swap latitude and longitude or return projected coordinates in meters.
