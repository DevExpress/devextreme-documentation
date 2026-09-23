---
id: dxMap.Options.providerConfig.calculateLocation
type: function(query)
---
---
##### shortDescription
Resolves a location string to geographic coordinates for the **osm** provider.

##### param(query): String
The address or place name to resolve.

##### return: PromiseLike
A promise that resolves with a [MapLocation](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapLocation '/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/') object or **undefined**.

---
Implement this callback to use addresses or place names in **center**, **markers[].location**, or **routes[].locations**. Coordinate objects, arrays, and numeric coordinate strings do not require a geocoding service.

The Map does not provide a built-in geocoding service. Return a native Promise or another compatible thenable. Resolve it with **undefined** if your service cannot find the location.

See [Calculate Locations](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/10%20Calculate%20Locations.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Locations/') for a callback example and error behavior.
