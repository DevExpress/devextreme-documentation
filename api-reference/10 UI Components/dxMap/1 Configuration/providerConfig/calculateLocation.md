---
id: dxMap.Options.providerConfig.calculateLocation
type: function(query)
---
---
##### shortDescription
Converts an address or place name to coordinates if [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') is *"osm"*.

##### param(query): String
The address or place name to convert.

##### return: PromiseLike
A promise that resolves with a [MapLocation](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapLocation '/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/') object or **undefined** if the location is not found.

---
The Map does not include a geocoding service. Implement this function to request coordinates from an external geocoding service. The Map calls this function when the following properties contain location strings instead of coordinates:

- [center](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Components/dxMap/Configuration/center/')
- **markers[]**.[location](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/markers/location '/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/location/')
- **routes[]**.[locations[]](/Documentation/ApiReference/UI_Components/dxMap/Configuration/routes/locations/)

The component caches coordinates for each location string.

#####See Also#####
- [OpenStreetMap Provider - Calculate Locations](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/10%20Calculate%20Locations.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/#Calculate_Locations')
