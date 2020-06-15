The default size of the **Map** widget is 300x300 pixels. To change it, use to the [width](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/width.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#width') and [height](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/height.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#height') options.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            width: '100%',
            height: 500
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        width="100%"
        [height]="500">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxMap
            :zoom="10"
            :center="centerCoordinates"
            width="100%"
            :height="500"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap
        },
        data() {
            return {
                centerCoordinates: { lat: 40.749825, lng: -73.987963 }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    width="100%"
                    height={500}
                />
            );
        }
    }

    export default App;

---

If you prefer specifying the widget size using CSS, set the **width** and **height** options to **null**. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            width: null,
            height: null
        });
    });

    <!--CSS-->
    #mapContainer {
        width: 100%;
        height: 500px;
    }

##### Angular

    <!--HTML-->
    <dx-map id="mapContainer"
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        [width]="null"
        [height]="null">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

    <!--CSS-->
    #mapContainer {
        width: 100%;
        height: 500px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap
            :zoom="10"
            :center="centerCoordinates"
            :width="null"
            :height="null"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap
        },
        data() {
            return {
                centerCoordinates: { lat: 40.749825, lng: -73.987963 }
            };
        }
    }
    </script>

    <style>
    #mapContainer {
        width: 100%;
        height: 500px;
    }
    </style>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    width={null}
                    height={null}
                />
            );
        }
    }

    export default App;

    <!-- tab: styles.css -->
    #mapContainer {
        width: 100%;
        height: 500px;
    }

---

#####See Also#####
- [Map - Zoom and Center the Map](/concepts/05%20Widgets/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/')
- [Map - Specify the Provider and Type](/concepts/05%20Widgets/Map/10%20Specify%20the%20Provider%20and%20Type.md '/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, size, height, width, css