OpenLayers displays **OsmTileServerConfig**.[attribution](/api-reference/10%20UI%20Components/dxMap/9%20Types/OsmTileServerConfig/attribution.md '/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution') in a collapsible [Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html) control. To change display settings, replace this control with a new instance. The following code snippet displays an attribution that users cannot collapse:

    <!--JavaScript-->
    import Attribution from 'ol/control/Attribution.js';

    function onReady(e) {
        const map = e.originalMap;
        map.getControls().getArray()
            .filter((control) => control instanceof Attribution)
            .forEach((control) => map.removeControl(control));
        map.addControl(new Attribution({ collapsible: false }));
    }
