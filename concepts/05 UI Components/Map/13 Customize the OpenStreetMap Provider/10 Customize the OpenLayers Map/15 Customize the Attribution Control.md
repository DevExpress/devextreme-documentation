OpenLayers displays **OsmTileServerConfig**.[attribution](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/#attribution) in a collapsible [Attribution](https://openlayers.org/en/latest/apidoc/module-ol_control_Attribution.html) control. To change display settings, replace this control with a new instance. The following code snippet displays attribution that users cannot collapse:

    <!--JavaScript-->
    import Attribution from 'ol/control/Attribution.js';

    function onReady(e) {
        const map = e.originalMap;
        map.getControls().getArray()
            .filter((control) => control instanceof Attribution)
            .forEach((control) => map.removeControl(control));
        map.addControl(new Attribution({ collapsible: false }));
    }
