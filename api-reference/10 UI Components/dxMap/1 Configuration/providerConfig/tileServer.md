---
id: dxMap.Options.providerConfig.tileServer
type: OsmTileServer | undefined
default: undefined
---
---
##### shortDescription
Specifies the tile source for the *"osm"* [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider).

---
Map does not include a tile source. Specify **tileServer** to display map tiles. Assign one of the following values to this property:

- A tile URL template
- An [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object
- A function that returns a tile source for the current map [type](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type)
