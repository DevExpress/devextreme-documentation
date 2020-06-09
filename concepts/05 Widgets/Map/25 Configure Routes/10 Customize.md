The [route configuration](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/') provides default route appearance and allows its customization. For example, you can change the color, opacity and thickness of the route line. In addition, you can specify whether a route is [for driving or for walking](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/routes/mode.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/routes/#mode').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 15,
            routes: [{
                locations: [
                    [40.782500, -73.966111],
                    [40.755833, -73.986389]
                ],
                color: 'red',
                opacity: 1
            }, {
                locations: [
                    [40.753889, -73.981389],
                    "Brooklyn Bridge,New York,NY"
                ],
                mode: 'walking', // or 'driving'
                weight: 2
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="15"
        [routes]="mapRoutes">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapRoutes = [{
            locations: [
                [40.782500, -73.966111],
                [40.755833, -73.986389]
            ],
            color: "red",
            opacity: 1
        }, {
            locations: [
                [40.753889, -73.981389],
                "Brooklyn Bridge,New York,NY"
            ],
            mode: "walking", // or "driving"
            weight: 2
        }];
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
            :zoom="15"
            :center="centerCoordinates"
            :routes="mapRoutes"
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
                mapRoutes: [{
                    locations: [
                        [40.782500, -73.966111],
                        [40.755833, -73.986389]
                    ],
                    color: "red",
                    opacity: 1
                }, {
                    locations: [
                        [40.753889, -73.981389],
                        "Brooklyn Bridge,New York,NY"
                    ],
                    mode: "walking", // or "driving"
                    weight: 2
                }]
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
    const mapRoutes = [{
        locations: [
            [40.782500, -73.966111],
            [40.755833, -73.986389]
        ],
        color: "red",
        opacity: 1
    }, {
        locations: [
            [40.753889, -73.981389],
            "Brooklyn Bridge,New York,NY"
        ],
        mode: "walking", // or "driving"
        weight: 2
    }];

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={15}
                    defaultCenter={centerCoordinates}
                    routes={mapRoutes}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Handle Route Related Events](/concepts/05%20Widgets/Map/25%20Configure%20Routes/15%20Handle%20the%20Related%20Events.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Handle_the_Related_Events/')
- [Map - Add and Remove Routes](/concepts/05%20Widgets/Map/25%20Configure%20Routes/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Routes/Add_and_Remove/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Routes)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, route, opacity, thickness, weight, color, mode