Exposes the Map UI component.

Exports:

- *default* - The [Map](/api-reference/10%20UI%20Components/dxMap '/Documentation/ApiReference/UI_Components/dxMap/') UI component

        require("devextreme/ui/map");
        // ===== or =====
        import Map from "devextreme/ui/map";

## OpenLayers Registration Module

The **devextreme/ui/map/openlayers** module registers OpenLayers for the Map component's **osm** provider. It has no exports.

Install **ol** in the application, then import the registration module before creating a map:

    <!--TypeScript-->
    import 'ol/ol.css';
    import 'devextreme/ui/map/openlayers';

The module imports OpenLayers from the application's dependencies. Browser-script applications instead load the OpenLayers build that exposes **window.ol**.

See [OpenStreetMap Provider](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/00%20Overview.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/') for setup and [Troubleshooting](/concepts/05%20UI%20Components/Map/12%20OpenStreetMap%20Provider/35%20Troubleshooting.md '/Documentation/Guide/UI_Components/Map/OpenStreetMap_Provider/Troubleshooting/') for strict package resolution and CommonJS bundlers.