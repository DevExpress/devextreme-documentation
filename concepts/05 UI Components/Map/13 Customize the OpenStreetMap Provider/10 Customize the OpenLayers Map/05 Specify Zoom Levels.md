Call [setMinZoom](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#setMinZoom) and [setMaxZoom](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#setMaxZoom) on the OpenLayers view to limit zoom levels:

    <!--JavaScript-->
    function onReady(e) {
        const view = e.originalMap.getView();
        view.setMinZoom(10);
        view.setMaxZoom(16);
    }

The Map also applies these limits to [zoom](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#zoom') values.
