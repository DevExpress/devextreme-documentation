---
id: OsmRouteResult
module: ui/map
export: OsmRouteResult
type: Array<Array<Number>> | OsmGeoJsonLineString
generateTypeLink:
---
---
##### shortDescription
Describes the geometry returned by **providerConfig.calculateRoute**.

---
Accepts either of the following formats:

- An array of **[latitude, longitude]** pairs. Each pair contains exactly two numbers.
- A GeoJSON [LineString](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmGeoJsonLineString '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmGeoJsonLineString/') geometry with **[longitude, latitude]** positions.

Both formats require at least two positions. Coordinates must be finite numbers, and latitude must be between -90 and 90 degrees. The provider normalizes longitude values and accounts for routes that cross the antimeridian.

[note]The coordinate order differs between these two formats. Do not return projected coordinates in meters.

See [Calculate Routes](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/15%20Calculate%20Routes.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Calculate_Routes/') for examples.
