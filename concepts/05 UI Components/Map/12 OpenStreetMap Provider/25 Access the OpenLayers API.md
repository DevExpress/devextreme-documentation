Use Map events to obtain native OpenLayers objects:

| Map API | OSM Object |
| --- | --- |
| onReady.originalMap | OpenLayers Map |
| onMarkerAdded.originalMarker; addMarker(...) result | OpenLayers Overlay |
| onRouteAdded.originalRoute; addRoute(...) result | OpenLayers Feature with LineString geometry |

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

## Customize a Native Marker

The Map supports custom PNG or SVG marker images through **markers[].iconSrc** and the map-level **markerIconSrc**. The individual **iconSrc** takes precedence. Size the source image for its intended display size.

    <!--JavaScript-->
    const markers = [{
        location: { lat: 40.7484, lng: -73.9857 },
        iconSrc: '/images/map-marker.png',
        tooltip: 'Empire State Building'
    }];

Use **onMarkerAdded** to assign a meaningful accessible name to an interactive marker:

    <!--TypeScript-->
    import type Overlay from 'ol/Overlay.js';
    import type { MarkerAddedEvent } from 'devextreme/ui/map';

    function onMarkerAdded(e: MarkerAddedEvent): void {
        if (e.component.option('provider') !== 'osm') {
            return;
        }
        const marker = e.originalMarker as Overlay;
        marker.getElement()?.setAttribute('aria-label', 'Empire State Building');
    }

This single-marker example uses a fixed label. For multiple markers, choose a label from the corresponding marker data. Keep the Map in control of the marker lifecycle: use **addMarker** and **removeMarker** rather than removing its internal DOM elements.

## Render Inside Shadow DOM

Load the DevExtreme theme and **ol.css** inside the ShadowRoot that contains the map. Styles in the document do not cross that boundary. The host and map container must have nonzero dimensions.

Pass the element inside the ShadowRoot to the Map constructor or jQuery initializer. Native **originalMap** and **originalMarker** access work through the same public events; do not query a private shadow tree or depend on internal CSS structure.

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-map-openstreetmap"
}
