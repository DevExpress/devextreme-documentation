Check the following:

- The tile source specifies [attribution](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/attribution.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution'). A URL template string cannot include attribution. Use an **OsmTileServerConfig** object instead.
- [controls](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/controls.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#controls') is `true` (required for zoom buttons).
- Your application loads the OpenLayers stylesheet (`ol.css`).

OpenLayers displays attribution in a collapsed control by default. Users can click the **i** button to expand this control.

[note] Certain tile services prohibit collapsible attributions. Configure the OpenLayers [Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html) control to comply with your tile service's terms of use.
