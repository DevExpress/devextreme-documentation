---
id: dxMap.Options.markers.location
type: Object | String | Array<Number>
inherits: MapLocation
---
---
##### shortDescription
Specifies the marker location.

---
You can specify the **location** value in one of the following formats.

 - { lat: 40.749825, lng: -73.987963}
 - "40.749825, -73.987963"
 - [40.749825, -73.987963]
 - "Brooklyn Bridge,New York,NY"

If you use the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider), define **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) to specify **markers[].location** as an address string. If Map cannot parse this address, the component displays the marker at `{lat: 0, lng: 0}`.
