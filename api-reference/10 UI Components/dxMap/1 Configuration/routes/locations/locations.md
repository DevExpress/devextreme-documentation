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

If [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"* and you specify **routes[].locations[]** as address strings, implement **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) to convert these addresses to coordinates. The Map does not display routes with unresolved locations.
