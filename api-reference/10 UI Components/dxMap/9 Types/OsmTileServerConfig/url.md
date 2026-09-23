---
id: OsmTileServerConfig.url
type: String
---
---
##### shortDescription
Specifies the tile URL template.

---
Use **{z}**, **{x}**, and **{y}** for the zoom level, tile column, and tile row. Use **{s}** if the service distributes requests across [subdomains](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/subdomains.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#subdomains').

For example: **https://tiles.example.com/{z}/{x}/{y}.png**. Replace this placeholder with your service URL. Include any service-specific access token as required by that service.
