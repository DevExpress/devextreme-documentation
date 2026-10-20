Interactive markers use a generic accessible name (*"Map marker"*). Specify a descriptive name for each marker in the [onMarkerAdded](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#onMarkerAdded) handler:

    <!--JavaScript-->
    function onMarkerAdded(e) {
        // e.originalMarker is an OpenLayers Overlay
        e.originalMarker.getElement().setAttribute('aria-label', 'Empire State Building');
    }

If marker tooltips contain plain text, you can assign this text to each marker's [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) attribute to specify unique accessible names:

    <!--JavaScript-->
    function onMarkerAdded(e) {
        const { tooltip } = e.options;
        const text = typeof tooltip === 'string' ? tooltip : tooltip?.text;
        if (text) {
            e.originalMarker.getElement().setAttribute('aria-label', text);
        }
    }
