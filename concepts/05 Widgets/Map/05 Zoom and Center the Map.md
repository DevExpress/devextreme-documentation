The [center](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/center '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/center/') option centers the **Map** on a specific location. The **center** option accepts the following location formats in addition to the formats the [current provider](/concepts/05%20Widgets/Map/10%20Specify%20the%20Provider%20and%20Type.md '/Documentation/Guide/Widgets/Map/Specify_the_Provider_and_Type/') accepts: 

- *{ lat: 40.749825, lng: -73.987963 }*
- *"40.749825, -73.987963"*
- *[ 40.749825, -73.987963 ]*
- *"Brooklyn Bridge,New York,NY"*

To zoom the **Map**, set the [zoom](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/zoom.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#zoom') option. The lower the value, the larger the displayed area. 

---
##### jQuery

    <!--HTML-->
    <div id="mapContainer"></div>
 
    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="centerCoordinates"
        [zoom]="10">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        centerCoordinates = { lat: 40.749825, lng: -73.987963 };
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
                />
            );
        }
    }

    export default App;

---

Note that the widget can automatically change the **center** and **zoom** options to display all [markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers '/Documentation/Guide/Widgets/Map/Configure_Markers/') and [routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes '/Documentation/Guide/Widgets/Map/Configure_Routes/') and align them with the widget's center. To disable this behavior, assign **false** to the [autoAdjust](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/autoAdjust.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#autoAdjust') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 7,
            markers: [
                { location: "42.743244, -71.594375" },
                { location: "37.058435, -74.903842" }
            ],
            autoAdjust: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="centerCoordinates"
        [zoom]="7"
        [autoAdjust]="false"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        centerCoordinates = { lat: 40.749825, lng: -73.987963 };
        mapMarkers = [
            { location: "42.743244, -71.594375" },
            { location: "37.058435, -74.903842" }
        ];
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
            :zoom="7"
            :center="centerCoordinates"
            :autoAdjust="false"
            :markers="mapMarkers"
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
                centerCoordinates: { lat: 40.749825, lng: -73.987963 },
                mapMarkers: [
                    { location: "42.743244, -71.594375" },
                    { location: "37.058435, -74.903842" }
                ]
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
    const mapMarkers = [
        { location: "42.743244, -71.594375" },
        { location: "37.058435, -74.903842" }
    ];

    class App extends React.Component {
        render() {
            return (
                <Map
                    zoom={7}
                    defaultCenter={centerCoordinates}
                    markers={mapMarkers}
                    autoAdjust={false}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Configure Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers '/Documentation/Guide/Widgets/Map/Configure_Markers/')
- [Map - Configure Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes '/Documentation/Guide/Widgets/Map/Configure_Routes/')
- [Map - Specify the Size](/concepts/05%20Widgets/Map/15%20Specify%20the%20Size.md '/Documentation/Guide/Widgets/Map/Specify_the_Size/')
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, center, central position, zoom level, center, zoom
