Assign an [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object to **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer) to configure a tile source. Specify the following fields in this object:

- [url](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#url): A tile URL template
- [attribution](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution): Copyright notices that your tile and data providers require
- [subdomains](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#subdomains) (optional): Values for the `{s}` placeholder in **url**
- [maxZoom](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#maxZoom) (optional): The highest zoom level that your tile source supports

The following code snippet configures a tile source that uses two subdomains:

    <!--JavaScript-->
    const tileServer = {
        url: 'https://{s}.tiles.example.com/{z}/{x}/{y}.png',
        subdomains: ['a', 'b'],
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    };

Assign a function to **tileServer** to display different tiles for each map [type](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type):

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
