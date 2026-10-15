Check the following:

- The tile source specifies [attribution](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution). A URL template string cannot include attribution. Use an **OsmTileServerConfig** object instead.
- [controls](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#controls) is `true` (required for zoom buttons).
- Your application loads the OpenLayers stylesheet (`ol.css`).

OpenLayers displays attribution in a collapsed control. Users can click the **i** button to expand this control.
