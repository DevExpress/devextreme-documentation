---
uid: ui/map:MarkerClickEvent.location
type: MapLocation
---
---
##### shortDescription
The clicked marker's coordinates.

---
**MarkerClickEvent**.**location** contains the following fields:

- **lat**: The marker's latitude
- **lng**: The marker's longitude

If you specify the marker's [location](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/location/) as a string or array, the Map converts the value to a [MapLocation](/Documentation/ApiReference/UI_Components/dxMap/Types/MapLocation/) object.

**MarkerClickEvent**.**location** identifies the clicked marker's position, not the pointer position. The **e.location** field in the Map's [onClick](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#onClick) handler contains the pointer position.