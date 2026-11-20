Create an OpenLayers [View](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) with an **extent** (the area that users can view) and assign this view to the map:

    <!--JavaScript-->
    import View from 'ol/View.js';
    import { transformExtent } from 'ol/proj.js';

    function onReady(e) {
        const map = e.originalMap;
        const view = map.getView();
        const projection = view.getProjection();
        map.setView(new View({
            projection,
            center: view.getCenter(),
            zoom: view.getZoom(),
            // [west, south, east, north] in degrees, converted to the map projection
            extent: transformExtent([-74.03, 40.68, -73.90, 40.88], 'EPSG:4326', projection)
        }));
    }

The Map also applies this restriction to [center](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Components/dxMap/Configuration/center/') and [zoom](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#zoom') values.
