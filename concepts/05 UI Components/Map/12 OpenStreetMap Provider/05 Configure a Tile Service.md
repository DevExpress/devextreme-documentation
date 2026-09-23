Assign a tile source to [providerConfig.tileServer](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/tileServer.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer'). The **osm** provider does not select a default service.

## Configure a Source

Use an [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object to specify a URL template and attribution:

    <!--JavaScript-->
    const tileServer = {
        url: 'https://tiles.example.com/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 19
    };

The URL above is a placeholder. The attribution is appropriate for OpenStreetMap data; your tile service may require an additional credit or a different notice.

The **{z}**, **{x}**, and **{y}** placeholders identify a tile. For services that support multiple hosts, include **{s}** and set **subdomains**:

    <!--JavaScript-->
    const tileServer = {
        url: 'https://{s}.tiles.example.com/{z}/{x}/{y}.png',
        subdomains: ['tiles1', 'tiles2'],
        attribution: 'Your tile service attribution',
        maxZoom: 18
    };

A string such as **"abc"** supplies one host value per character. An array supplies complete values. An omitted or empty **subdomains** setting uses **"a"**, **"b"**, and **"c"**, but only if the URL contains **{s}**.

The **maxZoom** setting describes the tile source, not the view. The source uses **19** if the setting is omitted. Users may zoom beyond that level and see enlarged tiles. Use [OpenLayers View constraints](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/25%20Access%20the%20OpenLayers%20API.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Access_the_OpenLayers_API/') to limit navigation.

## Select a Source by Map Type

A fixed tile URL or object does not change its imagery when [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type') changes. Supply a function to select a source for each type:

    <!--TypeScript-->
    import type { OsmTileServer, OsmTileServerConfig, MapType } from 'devextreme/ui/map';

    const sources: Record<MapType, OsmTileServerConfig> = {
        roadmap: {
            url: 'https://tiles.example.com/roadmap/{z}/{x}/{y}.png',
            attribution: 'Roadmap service attribution'
        },
        satellite: {
            url: 'https://tiles.example.com/satellite/{z}/{x}/{y}.jpg',
            attribution: 'Satellite service attribution'
        },
        hybrid: {
            url: 'https://tiles.example.com/hybrid/{z}/{x}/{y}.png',
            attribution: 'Hybrid service attribution'
        }
    };

    const tileServer: OsmTileServer = (type) => sources[type];

The function must return synchronously. The Map does not combine satellite imagery and labels to build a hybrid source for you. Each returned configuration must identify the desired tiles.

A function that returns **undefined**, or a configuration without a URL, produces **W1030**. During a type change, this does not remove the previous tile layer.

## Service Requirements

Use a service whose license, attribution rules, authentication method, and request limits suit your application. Configure credentials as required by that service; **apiKey** does not configure OSM requests.

Attribution is HTML. Use trusted content or sanitize it before assignment. **controls: false** hides the zoom control but keeps attribution.

OpenStreetMap data and the public **tile.openstreetmap.org** service have different usage considerations. The public service has a [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/), including attribution, identification, caching, and restrictions on bulk downloading. A limited map extent and zoom range alone do not establish compliance. Use a local or authorized service for automated tests and offline scenarios.
