To add markers at design-time, pass an array of objects to the [markers](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/') option. A marker requires only its [location](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/markers/location '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/markers/location/') to be specified.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            zoom: 5,
            markers: [
                { location: "40.749825, -73.090443" },
                { location: "42.743244, -71.594375" },
                { location: "37.058435, -74.903842" }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="5"
        [markers]="mapMarkers">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapMarkers = [
            { location: "40.749825, -73.090443" },
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
            :zoom="5"
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
                mapMarkers: [
                    { location: "40.749825, -73.090443" },
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

    const mapMarkers = [
        { location: "40.749825, -73.090443" },
        { location: "42.743244, -71.594375" },
        { location: "37.058435, -74.903842" }
    ];

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={5}
                    markers={mapMarkers}
                />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Markers/"
}

To add or remove a marker at runtime, call the [addMarker(markerOptions)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/addMarker(markerOptions).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#addMarkermarkerOptions') or [removeMarker(marker)](/api-reference/10%20UI%20Widgets/dxMap/3%20Methods/removeMarker(marker).md '/Documentation/ApiReference/UI_Widgets/dxMap/Methods/#removeMarkermarker') method.

    <!--JavaScript-->
    const markersCollection = [
        { location: "40.749825, -73.090443" },
        { location: "42.743244, -71.594375", tooltip: { isShown: true } }
    ];

    // Adds a marker
    map.addMarker(markersCollection[0]);

    // Adds several markers
    map.addMarker(markersCollection);

    // Removes the marker with specific configuration
    map.removeMarker(markersCollection[1]);

    // Removes the marker with index 2 in the "markers" array
    map.removeMarker(2);

    // Removes the markers with specific configurations
    map.removeMarker(markersCollection);

    // Removes the markers with indexes 0 and 4 in the "markers" array
    map.removeMarker([0, 4]);

In the following code, a marker is added each time a user clicks someplace on the **Map**. The last marker from the **markers**  array is removed when the user clicks the [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') under the **Map**.

    <!--JavaScript-->
    $(function() {
        const map = $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            onClick: function (e) {
                e.component.addMarker({
                    // Location of the clicked point on the map
                    location: e.location
                });
            }
        }).dxMap("instance");

        $("#removeMarker").dxButton({
            text: "Remove the Last Marker",
            onClick: function () {
                const markers = map.option("markers");
                const markerCount = markers.length;
                if (markerCount < 1)
                    return;
                // Removes the last marker
                map.removeMarker(markers[markerCount - 1]);
            }
        });
    });

With Angular, Vue, or React, use a different technique. Bind the **markers** option of the **Map** widget to a component property. 

---
##### Angular

    <!--HTML-->
    <dx-map
        [zoom]="10"
        [markers]="mapMarkers"
        (onClick)="addMarker($event)">
    </dx-map>
    <dx-button
        text="Remove the Last Marker"
        (onClick)="removeMarker()">
    </dx-button>

    <!--TypeScript-->
    import { DxMapModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        mapMarkers = [
            { location: "40.749825, -73.090443" },
            { location: "42.743244, -71.594375" }
        ];
        addMarker (e) {
            this.mapMarkers.push({ location: e.location });
        };
        removeMarker () {
            this.mapMarkers.pop();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule,
            DxButtonModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <DxMap
                :zoom="10"
                :markers="mapMarkers"
                @click="addMarker"
            />
            <DxButton
                text="Remove the Last Marker"
                @click="removeMarker"
            />
        </div>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';
    import { DxButton } from 'devextreme-vue/button';

    export default {
        components: {
            DxMap,
            DxButton
        },
        data() {
            return {
                mapMarkers: [
                    { location: "40.749825, -73.090443" },
                    { location: "42.743244, -71.594375" }
                ]
            };
        },
        methods: {
            addMarker(e) {
                this.mapMarkers.push({ location: e.location });
            },
            removeMarker() {
                this.mapMarkers.pop();
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';
    import { Button } from 'devextreme-react/button';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                mapMarkers: [
                    { location: "40.749825, -73.090443" },
                    { location: "42.743244, -71.594375" }
                ]
            };

            this.addMarker = this.addMarker.bind(this);
            this.removeMarker = this.removeMarker.bind(this);
        }

        addMarker() {
            this.state.mapMarkers.push({ location: e.location });
        }

        removeMarker() {
            this.state.mapMarkers.pop();
        }

        render() {
            return (
                <div>
                    <Map
                        defaultZoom={10}
                        markers={this.state.mapMarkers}
                        onClick={this.addMarker}
                    />
                    <Button
                        text="Remove the Last Marker"
                        onClick={this.removeMarker}
                    />
                </div>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Customize Markers](/concepts/05%20Widgets/Map/20%20Configure%20Markers/10%20Customize.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Customize/')
- [Map - Handle Marker Related Events](/concepts/05%20Widgets/Map/20%20Configure%20Markers/15%20Handle%20the%20Related%20Events.md '/Documentation/Guide/Widgets/Map/Configure_Markers/Handle_the_Related_Events/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/Markers)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, markers, location, add marker, remove marker, add on click