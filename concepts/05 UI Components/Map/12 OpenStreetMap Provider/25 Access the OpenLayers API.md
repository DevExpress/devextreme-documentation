Use Map events to obtain native OpenLayers objects:

| Map API | OSM Object |
| --- | --- |
| onReady.originalMap | OpenLayers Map |

These objects are provider-specific. Check the active provider before you use an OpenLayers method in a handler shared by multiple providers.

## Restrict Zoom and the Visible Area

The Map's **center** and **zoom** use the DevExtreme location and zoom formats. Native OpenLayers APIs use their configured projection. The OSM provider starts with Web Mercator (**EPSG:3857**); transform geographic longitude/latitude coordinates before passing them to native geometry APIs.

The following modular example applies view constraints in **onReady**:

    <!--TypeScript-->
    import View from 'ol/View.js';
    import type OpenLayersMap from 'ol/Map.js';
    import { transformExtent } from 'ol/proj.js';
    import type { ReadyEvent } from 'devextreme/ui/map';

    function onReady(e: ReadyEvent): void {
        if (e.component.option('provider') !== 'osm') {
            return;
        }
        const map = e.originalMap as OpenLayersMap;
        const currentView = map.getView();
        const projection = currentView.getProjection();
        const extent = transformExtent(
            [-74.03, 40.68, -73.90, 40.88],
            'EPSG:4326',
            projection
        );

        map.setView(new View({
            projection,
            center: currentView.getCenter(),
            zoom: currentView.getZoom(),
            extent,
            minZoom: 12,
            maxZoom: 17,
            enableRotation: false,
            showFullExtent: false
        }));
    }

Set **autoAdjust: false** if automatic fitting of markers and routes would conflict with the view your application manages.

**extent** restricts navigation. By contrast, **view.fit(extent, { size: map.getSize() })** fits an area once but does not restrict subsequent panning. See the OpenLayers [View API](https://openlayers.org/en/latest/apidoc/module-ol_View-View.html) for constraint behavior.

For a browser-script application, use **ol.View** and **ol.proj.transformExtent** from the loaded OpenLayers build instead of module imports.
