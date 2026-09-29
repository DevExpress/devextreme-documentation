---
id: OsmTileServerConfig.attribution
type: String
---
---
##### shortDescription
The attribution for the tile source (an HTML string).

---
Map does not add attribution automatically. Specify the copyright notices and links that your tile and data providers require.

Map passes the **attribution** value to OpenLayers as HTML. This behavior makes Map potentially vulnerable to XSS attacks. If the **attribution** value comes from an untrusted source, sanitize this value before assignment.
