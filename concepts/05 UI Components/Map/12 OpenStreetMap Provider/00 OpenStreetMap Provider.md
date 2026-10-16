Set [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) to *"osm"* to use the OpenStreetMap (OSM) provider. This provider uses the [OpenLayers](https://openlayers.org/) library to display maps.

DevExtreme does not include map services for the OSM provider. Specify self-hosted or third-party services in the following [providerConfig](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/) properties:

- [tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer): Tile source settings
- [calculateLocation](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateLocation): A function that converts addresses to coordinates
- [calculateRoute](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#calculateRoute): A function that calculates route geometry

The following code snippet configures a Map that uses the OSM provider:

---
##### jQuery

    <!--JavaScript-->
    $(() => {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "osm",
            providerConfig: {
                tileServer: {
                    url: "https://tiles.example.com/{z}/{x}/{y}.png",
                    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap contributors</a>"
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map
        [zoom]="10"
        provider="osm">
        <dxo-map-center
            [lat]="40.749825"
            [lng]="-73.987963">
        </dxo-map-center>
        <dxo-map-provider-config
            [tileServer]="tileServer">
        </dxo-map-provider-config>
    </dx-map>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DxMapModule } from 'devextreme-angular';

    @Component({
        // ...
        standalone: true,
        imports: [DxMapModule]
    })
    export class AppComponent {
        tileServer = {
            url: 'https://tiles.example.com/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap
            :zoom="10"
            provider="osm">
            <DxCenter
                :lat="40.749825"
                :lng="-73.987963"
            />
            <DxProviderConfig
                :tile-server="tileServer"
            />
        </DxMap>
    </template>

    <script setup>
    import { DxMap, DxCenter, DxProviderConfig } from 'devextreme-vue/map';

    const tileServer = {
        url: 'https://tiles.example.com/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Map, ProviderConfig } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };
    const tileServer = {
        url: 'https://tiles.example.com/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    };

    export default function App() {
        return (
            <Map
                defaultZoom={10}
                defaultCenter={centerCoordinates}
                provider="osm">
                <ProviderConfig
                    tileServer={tileServer}
                />
            </Map>
        );
    }

---
