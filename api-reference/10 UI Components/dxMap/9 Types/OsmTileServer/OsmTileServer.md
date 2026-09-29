---
id: OsmTileServer
module: ui/map
export: OsmTileServer
type: String | OsmTileServerConfig | function(type)
generateTypeLink: 
---
---
##### shortDescription
Tile source settings for the **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer) property.

##### param(type): Enums.MapType
The map [type](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type) to display.

##### return: String | OsmTileServerConfig | undefined
The tile source for the specified map type (a URL template or an [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object).

---
**OsmTileServer** can be one of the following:

- A tile URL template
- An [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object
- A function that returns a tile source for the current map [type](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type)

A URL template only specifies the tile URL. To also specify attribution and other tile source settings, use an **OsmTileServerConfig** object.

A URL template or an **OsmTileServerConfig** object displays the same tiles for all map types. To display different tiles for *"roadmap"*, *"satellite"*, and *"hybrid"* map types, use a function. Map calls this function at initialization and each time **type** changes. The function must return a value synchronously. If the function does not return a valid tile source, Map does not change the displayed tiles.
