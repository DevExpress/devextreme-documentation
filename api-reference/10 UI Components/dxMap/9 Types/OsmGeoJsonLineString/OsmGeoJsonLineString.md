---
id: OsmGeoJsonLineString
module: ui/map
export: OsmGeoJsonLineString
type: Object
generateTypeLink:
---
---
##### shortDescription
Describes route geometry in the GeoJSON LineString format.

---
| Field | Type | Description |
| --- | --- | --- |
| type | String | Must be **"LineString"**. |
| coordinates | Array&lt;Array&lt;Number&gt;&gt; | At least two positions in **[longitude, latitude]** order, in degrees. Additional components, such as altitude, do not affect the rendered route. |

    <!--JavaScript-->
    const geometry = {
        type: 'LineString',
        coordinates: [
            [-73.9857, 40.7484],
            [-73.9819, 40.7681]
        ]
    };

Return the geometry itself, not a GeoJSON Feature, FeatureCollection, or a complete routing service response. The Map does not support MultiLineString results.

See [OsmRouteResult](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmRouteResult '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmRouteResult/') for the alternative coordinate order used by plain arrays.
