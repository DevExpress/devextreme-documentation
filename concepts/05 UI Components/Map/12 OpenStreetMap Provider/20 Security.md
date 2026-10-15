The Map renders **OsmTileServerConfig**.[attribution](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution) and **markers[]**.**tooltip**.[text](/Documentation/ApiReference/UI_Components/dxMap/Configuration/markers/tooltip/#text) values as HTML. Encode these values if their sources are untrusted. Refer to the following help topics for more information:

- [Potentially Vulnerable API - OsmTileServerConfig.attribution](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/OsmTileServerConfigattribution)
- [Potentially Vulnerable API - markers[].tooltip.text](/Documentation/Guide/Common/Security_Considerations/#HTML_Encoding/Potentially_Vulnerable_API/markers[]tooltiptext)

The browser requests tiles and runs **calculateLocation** and **calculateRoute**, so users can read API keys in tile URLs and service requests. Use keys that your service allows in client applications (for instance, keys restricted to your domain). If keys must stay confidential, route requests to the map service through your server.

Add map service origins to your Content Security Policy as described in the following help topic: [CSP Directives for Map Integrations](/Documentation/Guide/Common/Security_Considerations/#Content_Security_Policy/CSP_Directives_for_Map_Integrations).
