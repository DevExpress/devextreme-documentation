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

If you use the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider), define **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) to specify **routes[].locations[]** as address strings. Map does not display routes with unresolved locations.
