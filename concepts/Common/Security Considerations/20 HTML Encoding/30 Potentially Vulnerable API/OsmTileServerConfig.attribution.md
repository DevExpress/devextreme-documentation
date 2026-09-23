The Map's **osm** provider passes [OsmTileServerConfig.attribution](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/attribution.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution') to OpenLayers as HTML. This also applies to a configuration returned by a **providerConfig.tileServer** function.

Use a trusted attribution string that contains the copyright notice and links required by your tile and data providers. If the value comes from an untrusted source, sanitize the allowed markup before assigning it. Encode content that should be displayed as plain text.

Do not remove required attribution to avoid processing HTML. See [Configure a Tile Service](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/05%20Configure%20a%20Tile%20Service.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Configure_a_Tile_Service/') for configuration examples.
