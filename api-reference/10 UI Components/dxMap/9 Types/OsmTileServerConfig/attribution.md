---
id: OsmTileServerConfig.attribution
type: String
---
---
##### shortDescription
The attribution for the tile source (an HTML string).

---
The Map does not add attribution automatically. Specify the copyright notices and links that your tile and data providers require.

OpenLayers displays attribution in a collapsed control by default. Users can click the **i** button to expand this control.

[note] Tile service terms may prohibit collapsible attributions. Configure the OpenLayers [Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html) control to comply with your tile service's terms of use.

The Map passes the attribution value to OpenLayers as HTML. This behavior makes the Map potentially vulnerable to XSS attacks. If the attribution value comes from an untrusted source, sanitize this value before assignment. Refer to the following help topic for more information: [Potentially Vulnerable API - OsmTileServerConfig.attribution](/concepts/Common/Security%20Considerations/20%20HTML%20Encoding/30%20Potentially%20Vulnerable%20API/OsmTileServerConfig.attribution.md '/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/OsmTileServerConfigattribution').
