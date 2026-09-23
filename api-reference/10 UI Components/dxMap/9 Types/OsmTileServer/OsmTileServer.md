---
id: OsmTileServer
module: ui/map
export: OsmTileServer
type: String | OsmTileServerConfig | function(type)
generateTypeLink:
---
---
##### shortDescription
Describes a raster tile source or a function that selects one.

##### param(type): Enums.MapType
The requested map type.

##### return: String | OsmTileServerConfig | undefined
The tile source for the requested type, or **undefined** if no source is configured.

---
A string specifies only the tile URL template. Use an [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object to also specify attribution and other source settings.

Use a function to select a tile source for **"roadmap"**, **"satellite"**, or **"hybrid"**. The function runs during initialization and when the map type changes. It must return synchronously; promises are not supported. A missing result produces [W1030](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1030.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1030') and does not remove an existing tile layer.

See [Configure a Tile Service](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/05%20Configure%20a%20Tile%20Service.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Configure_a_Tile_Service/').
