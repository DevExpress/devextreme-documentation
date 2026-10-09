---
id: OsmGeoJsonLineString
module: ui/map
export: OsmGeoJsonLineString
type: Object
generateTypeLink: 
---
---
##### shortDescription
Route geometry in GeoJSON LineString format.

---
**OsmGeoJsonLineString** contains the following fields:

- **type**: The geometry type (must be *"LineString"*)
- **coordinates**: Route positions (two or more arrays of numbers)

Convert the response to a *"LineString"* geometry object in [calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute) if your routing service returns one of the following:

- GeoJSON Feature
- GeoJSON FeatureCollection
- GeoJSON MultiLineString

[note] The **coordinates** array lists longitude then latitude. Other Map location arrays such as the [OsmRouteResult](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/) array use the reverse order (latitude then longitude).
