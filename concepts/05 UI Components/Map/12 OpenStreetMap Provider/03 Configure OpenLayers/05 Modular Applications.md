Install the [ol](https://www.npmjs.com/package/ol) package:

    npm install ol

The `devextreme/ui/map/openlayers` module registers OpenLayers for the Map. Import this module and the OpenLayers stylesheet (`ol/ol.css`) before Map initialization:

---
##### jQuery

    <!-- tab: index.js -->
    import 'devextreme/ui/map/openlayers';
    import 'ol/ol.css';

##### Angular

    <!-- tab: app.component.ts -->
    import 'devextreme/ui/map/openlayers';
    // ...

    <!-- tab: angular.json -->
    "styles": [
        // ...
        "node_modules/ol/ol.css"
    ]

##### Vue

    <!-- tab: App.vue -->
    <script setup>
    import 'devextreme/ui/map/openlayers';
    import 'ol/ol.css';
    // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import 'devextreme/ui/map/openlayers';
    import 'ol/ol.css';
    // ...

---

[note] The `ol` package contains only ES modules and does not include a CommonJS build.
