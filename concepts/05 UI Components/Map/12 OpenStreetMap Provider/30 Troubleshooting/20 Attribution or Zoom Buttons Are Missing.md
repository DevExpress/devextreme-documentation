Check the following:

- The tile source specifies [attribution](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution). A URL template string cannot include attribution. Use an **OsmTileServerConfig** object instead.
- [controls](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#controls) is `true` (required for zoom buttons).
- Your application loads the OpenLayers stylesheet (`ol.css`).

OpenLayers displays attribution in a collapsed control by default. Users can click the **i** button to expand this control.

[note] Certain tile services prohibit collapsible attributions. Configure the OpenLayers [Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html) control to comply with your tile service's terms of use.
