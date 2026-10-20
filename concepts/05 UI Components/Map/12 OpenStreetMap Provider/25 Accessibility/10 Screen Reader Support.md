Interactive markers use a generic accessible name (*"Map marker"*). Specify a descriptive name for each marker in the [onMarkerAdded](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#onMarkerAdded) handler:

    <!--JavaScript-->
    function onMarkerAdded(e) {
        // e.originalMarker is an OpenLayers Overlay
        e.originalMarker.getElement().setAttribute('aria-label', 'Empire State Building');
    }
