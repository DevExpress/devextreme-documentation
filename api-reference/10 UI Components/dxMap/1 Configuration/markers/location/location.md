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

If [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) is *"osm"* and you specify **markers[].location** as an address string, implement **providerConfig**.[calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation) to convert this address to coordinates. If the Map cannot resolve the address, the component displays the marker at `{lat: 0, lng: 0}`.
