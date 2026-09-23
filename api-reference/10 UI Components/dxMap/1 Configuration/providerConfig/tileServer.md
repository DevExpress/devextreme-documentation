---
id: dxMap.Options.providerConfig.tileServer
type: OsmTileServer | undefined
default: undefined
---
---
##### shortDescription
Specifies the raster tile source for the **osm** provider.

---
Accepts a URL template, an [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object, or a function that returns either value for the current [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type').

The Map does not select a tile service automatically. Configure a service that your application is authorized to use and supply its required attribution. A missing configuration produces [W1030](/api-reference/10%20UI%20Components/Errors%20and%20Warnings/W1030.md '/Documentation/ApiReference/UI_Components/Errors_and_Warnings/#W1030').

See [Configure a Tile Service](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/05%20Configure%20a%20Tile%20Service.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Configure_a_Tile_Service/') for examples.
