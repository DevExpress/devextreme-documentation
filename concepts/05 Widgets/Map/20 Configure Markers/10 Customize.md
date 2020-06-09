The **Map** widget allows you to provide a single icon for all markers. For this purpose, assign the URL of the icon to the [markerIconSrc](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markerIconSrc.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#markerIconSrc') option. In addition, you can customize the icon of an individual marker using the [iconScr](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers/iconSrc.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/#iconSrc') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            zoom: 10,
            markerIconSrc: "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png",
            markers: [
                { location: "40.749825, -73.090443" },
                { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
                { location: "37.058435, -74.903842" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="10"
        [markerIconSrc]="markerIconUrl"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        markerIconUrl: string = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";
        mapMarkers = [
            { location: "40.749825, -73.090443" },
            { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
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
            :zoom="10"
            :marker-icon-src="markerIconUrl"
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
                markerIconUrl: "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png",
                mapMarkers: [
                    { location: "40.749825, -73.090443" },
                    { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
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

    const markerIconUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";
    const mapMarkers = [
        { location: "40.749825, -73.090443" },
        { location: "42.743244, -71.594375", iconSrc: "http://www.iconsdb.com/icons/preview/gray/map-marker-2-xxl.png" },
        { location: "37.058435, -74.903842" }
    ];

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    markerIconSrc={markerIconUrl}
                    markers={mapMarkers}
                />
            );
        }
    }

    export default App;

---

Apart from the icon, you can specify a [tooltip](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers/tooltip '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/tooltip/') and [handle the click event](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers/onClick.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/#onClick') for an individual marker.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            markers: [{
                location: "Brooklyn Bridge,New York,NY",
                tooltip: {
                    text: "Brooklyn Bridge",
                    isShown: true
                }
            }, { 
                location: "40.058435, -74.903842",
                onClick: function () {
                    DevExpress.ui.notify("The marker is clicked!", "info", 1000);
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    import DxNotify from "devextreme/ui/notify"
    // ...
    export class AppComponent {
        mapMarkers = [{
            location: "Brooklyn Bridge,New York,NY",
            tooltip: {
                text: "Brooklyn Bridge",
                isShown: true
            }
        }, { 
            location: "40.058435, -74.903842",
            onClick: () => {
                DxNotify("The marker is clicked!", "info", 1000);
            }
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
            :zoom="10"
            :center="centerCoordinates"
            :markers="mapMarkers"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';
    import notify from 'devextreme/ui/notify';

    export default {
        components: {
            DxMap
        },
        data() {
            return {
                centerCoordinates: { lat: 40.749825, lng: -73.987963 },
                mapMarkers: [{
                    location: "Brooklyn Bridge,New York,NY",
                    tooltip: {
                        text: "Brooklyn Bridge",
                        isShown: true
                    }
                }, { 
                    location: "40.058435, -74.903842",
                    onClick: () => {
                        notify("The marker is clicked!", "info", 1000);
                    }
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
    import notify from 'devextreme/ui/notify';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };
    const mapMarkers = [{
        location: "Brooklyn Bridge,New York,NY",
        tooltip: {
            text: "Brooklyn Bridge",
            isShown: true
        }
    }, { 
        location: "40.058435, -74.903842",
        onClick: () => {
            notify("The marker is clicked!", "info", 1000);
        }
    }];

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    markers={mapMarkers}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Handle Marker Related Events](/concepts/05%20Widgets/Map/20%20Configure%20Markers/15%20Handle%20the%20Related%20Events.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Handle_the_Related_Events/')
- [Map - Add and Remove Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers/05%20Add%20and%20Remove.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Add_and_Remove/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Markers)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, marker icon, customize marker, tooltip, marker click