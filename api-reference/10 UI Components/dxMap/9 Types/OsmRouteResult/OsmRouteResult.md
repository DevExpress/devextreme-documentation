---
id: OsmRouteResult
module: ui/map
export: OsmRouteResult
type: Array<Array<Number>> | OsmGeoJsonLineString
generateTypeLink: 
---
---
##### shortDescription
Route geometry that the **providerConfig**.[calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute) function returns.

---
**OsmRouteResult** can be one of the following:

- An array of coordinate pairs
- An [OsmGeoJsonLineString](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmGeoJsonLineString/) object

Both formats require at least two positions. Latitude values must be between -90 and 90.

[note] Coordinate pairs list latitude then longitude. The **coordinates** array of an [OsmGeoJsonLineString](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmGeoJsonLineString/) object uses the reverse order (longitude then latitude).