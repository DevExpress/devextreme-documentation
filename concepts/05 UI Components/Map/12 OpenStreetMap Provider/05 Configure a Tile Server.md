Assign an [OsmTileServerConfig](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/') object to **providerConfig**.[tileServer](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/providerConfig/tileServer.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer') to configure a tile source. Specify the following fields in this object:

- [url](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/url.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#url'): A tile URL template
- [attribution](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/attribution.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution'): Copyright notices that your tile and data providers require
- [subdomains](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/subdomains.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#subdomains') (optional): Values for the `{s}` placeholder in **url**
- [maxZoom](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/maxZoom.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#maxZoom') (optional): The highest zoom level that your tile source supports

The following code snippet configures a tile source that uses two subdomains:

    <!--JavaScript-->
    const tileServer = {
        url: 'https://{s}.tiles.example.com/{z}/{x}/{y}.png',
        subdomains: ['a', 'b'],
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    };

Assign a function to **tileServer** to display different tiles for each map [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type'):

    <!--JavaScript-->
    const tileSources = {
        roadmap: {
            url: 'https://tiles.example.com/roadmap/{z}/{x}/{y}.png',
            attribution: 'Roadmap tile attribution'
        },
        satellite: {
            url: 'https://tiles.example.com/satellite/{z}/{x}/{y}.jpg',
            attribution: 'Satellite tile attribution'
        },
        hybrid: {
            url: 'https://tiles.example.com/hybrid/{z}/{x}/{y}.jpg',
            attribution: 'Hybrid tile attribution'
        }
    };

    const tileServer = (type) => tileSources[type];

The Map displays one tile source at a time. A *"hybrid"* tile source must include both satellite imagery and labels.

Review the terms of use for your tile service. For instance, comply with the [Tile Usage Policy](https://operations.osmfoundation.org/policies/tiles/) if you use public OpenStreetMap tile servers.
