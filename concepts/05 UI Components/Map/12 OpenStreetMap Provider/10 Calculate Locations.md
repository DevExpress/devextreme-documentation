The OSM provider uses the **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) function to convert addresses and place names to coordinates. Implement this function to request coordinates from a geocoding service:

    <!--JavaScript-->
    async function calculateLocation(query) {
        const response = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
        if (response.status === 404) {
            return undefined;
        }
        if (!response.ok) {
            throw new Error(`Geocoding request failed: ${response.status}`);
        }
        const { lat, lng } = await response.json();
        return { lat, lng };
    }

This example requests coordinates from an application endpoint (`/api/geocode`). The endpoint returns a `{ lat, lng }` object for a resolved address and `404` for an unknown address. Adapt request/response formats to your geocoding service.

If the **calculateLocation** promise rejects or resolves with `undefined`, the Map uses `{lat: 0, lng: 0}` for [center](/Documentation/ApiReference/UI_Components/dxMap/Configuration/center/) and [markers](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/). The component also does not display [routes](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/) that contain unresolved addresses.
