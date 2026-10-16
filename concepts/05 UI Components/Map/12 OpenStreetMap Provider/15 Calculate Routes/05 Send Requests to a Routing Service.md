**calculateRoute** receives a [CalculateOsmRouteInfo](/Documentation/ApiReference/UI_Components/dxMap/Types/CalculateOsmRouteInfo/) object that contains route waypoints (**CalculateOsmRouteInfo**.**locations**) and the transportation mode. Send these values to a routing service and return route geometry:

    <!--JavaScript-->
    async function calculateRoute({ locations, mode }) {
        const response = await fetch('/api/route', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ locations, mode })
        });
        if (!response.ok) {
            throw new Error(`Routing request failed: ${response.status}`);
        }
        const route = await response.json(); // A GeoJSON FeatureCollection
        return route.features[0].geometry; // A GeoJSON LineString object
    }

This example sends route parameters to an application endpoint (`/api/route`) that returns a GeoJSON [FeatureCollection](https://www.rfc-editor.org/info/rfc7946/#section-3.3). Adapt request/response formats to your routing service.
