---
id: dxMap.Options.providerConfig.calculateLocation
type: function(query)
---
---
##### shortDescription
Converts an address or place name to coordinates for the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider).

##### param(query): String
The address or place name to convert.

##### return: PromiseLike
A promise that resolves with a [MapLocation](/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/) object or **undefined** if the location is not found.

---
Map does not include a geocoding service. Implement this function to request coordinates from an external geocoding service. Map calls this function for location strings that are not coordinates for the following values:

- [center](/Documentation/ApiReference/UI_Components/dxMap/Configuration/center/)
- **markers[]**.[location](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/location/)
- **routes[]**.[locations[]](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/)

The component caches coordinates for each location string.
