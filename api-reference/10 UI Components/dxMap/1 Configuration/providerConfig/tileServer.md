---
id: dxMap.Options.providerConfig.tileServer
type: OsmTileServer | undefined
default: undefined
---
---
##### shortDescription
Specifies the tile source if [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') is *"osm"*.

---
The Map does not include a tile source. Specify **tileServer** to display map tiles. Assign one of the following values to this property:

- A tile URL template
- An [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object
- A function that returns a tile source for the current map [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type')

#####See Also#####
- [OpenStreetMap Provider - Configure a Tile Server](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/05%20Configure%20a%20Tile%20Server.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/#Configure_a_Tile_Server')
