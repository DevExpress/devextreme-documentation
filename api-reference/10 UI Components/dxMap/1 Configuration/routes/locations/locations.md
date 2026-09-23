---
id: dxMap.Options.routes.locations
type: Array<Object>
inherits: MapLocation
---
---
##### shortDescription
Contains an array of objects making up the route.

---
You can specify the **locations** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

For **osm**, configure [providerConfig.calculateRoute](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/calculateRoute.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute'). Addresses and place names also require **providerConfig.calculateLocation**.
