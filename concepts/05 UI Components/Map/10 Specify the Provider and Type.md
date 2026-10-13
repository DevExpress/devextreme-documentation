The Map supports the following map providers:

- Google Maps (default)
- Azure Maps
- Google Static Maps
- OpenStreetMap (OSM)

Use the [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') property to select a provider:

---
##### jQuery

    <!--JavaScript-->
    $(() => {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "google" // or "azure" | "googleStatic" | "osm"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map
        [zoom]="10"
        provider="google"> <!-- or "azure" | "googleStatic" | "osm" -->
        <dxo-map-center
            [lat]="40.749825"
            [lng]="-73.987963">
        </dxo-map-center>
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
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap
            :zoom="10"
            provider="google"> <!-- or "azure" | "googleStatic" | "osm" -->
            <DxCenter
                :lat="40.749825"
                :lng="-73.987963"
            />
        </DxMap>
    </template>

    <script setup>
    import { DxMap, DxCenter } from 'devextreme-vue/map';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    export default function App() {
        return (
            <Map
                defaultZoom={10}
                defaultCenter={centerCoordinates}
                provider="google" // or "azure" | "googleStatic" | "osm"
            />
        );
    }

---

If **provider** is *"osm"*, load [OpenLayers](https://openlayers.org/) before Map initialization and specify a tile source in **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer).

Google Maps, Azure Maps, and Google Static Maps require an API key to authenticate your application. To obtain a key, refer to your provider's documentation. Assign the key to the [apiKey](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/apiKey '/Documentation/ApiReference/UI_Components/dxMap/Configuration/apiKey/') property. If your application uses more than one of these providers, specify an object with a key for each provider:

---
##### jQuery

    <!--JavaScript-->
    $(() => {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "azure",
            apiKey: {
                azure: "YOUR_AZURE_MAPS_API_KEY",
                google: "YOUR_GOOGLE_MAPS_API_KEY",
                googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map
        [zoom]="10"
        provider="azure">
        <dxo-map-center
            [lat]="40.749825"
            [lng]="-73.987963">
        </dxo-map-center>
        <dxo-map-api-key
            azure="YOUR_AZURE_MAPS_API_KEY"
            google="YOUR_GOOGLE_MAPS_API_KEY"
            googleStatic="YOUR_GOOGLE_STATIC_MAPS_API_KEY">
        </dxo-map-api-key>
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
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap
            :zoom="10"
            provider="azure">
            <DxCenter
                :lat="40.749825"
                :lng="-73.987963"
            />
            <DxApiKey
                azure="YOUR_AZURE_MAPS_API_KEY"
                google="YOUR_GOOGLE_MAPS_API_KEY"
                google-static="YOUR_GOOGLE_STATIC_MAPS_API_KEY"
            />
        </DxMap>
    </template>

    <script setup>
    import { DxMap, DxCenter, DxApiKey } from 'devextreme-vue/map';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Map, ApiKey } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    export default function App() {
        return (
            <Map
                defaultZoom={10}
                defaultCenter={centerCoordinates}
                provider="azure">
                <ApiKey
                    azure="YOUR_AZURE_MAPS_API_KEY"
                    google="YOUR_GOOGLE_MAPS_API_KEY"
                    googleStatic="YOUR_GOOGLE_STATIC_MAPS_API_KEY"
                />
            </Map>
        );
    }

---

If **provider** is *"osm"*, the Map ignores **apiKey**.

The Map supports the following map types: *"roadmap"* (default), *"satellite"*, and *"hybrid"*. Use the [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type') property to change the map type:

---
##### jQuery

    <!--JavaScript-->
    $(() => {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "azure",
            type: "satellite"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map
        [zoom]="10"
        provider="azure"
        type="satellite">
        <dxo-map-center
            [lat]="40.749825"
            [lng]="-73.987963">
        </dxo-map-center>
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
        // ...
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap
            :zoom="10"
            provider="azure"
            type="satellite">
            <DxCenter
                :lat="40.749825"
                :lng="-73.987963"
            />
        </DxMap>
    </template>

    <script setup>
    import { DxMap, DxCenter } from 'devextreme-vue/map';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    export default function App() {
        return (
            <Map
                defaultZoom={10}
                defaultCenter={centerCoordinates}
                provider="azure"
                type="satellite"
            />
        );
    }

---

If **provider** is *"azure"*, the *"roadmap"* and *"hybrid"* types correspond to the Azure Maps *road* and *satellite_road_labels* styles.

If **provider** is *"osm"*, assign a function to **providerConfig**.[tileServer](/Documentation/ApiReference/UI_Components/dxMap/Configuration/providerConfig/#tileServer) to display different tiles for each map type. A URL template or an [OsmTileServerConfig](/Documentation/ApiReference/UI_Components/dxMap/Types/OsmTileServerConfig/) object displays the same tiles for all types.

#####See Also#####
- [Map - Zoom and Center the Map](/concepts/05%20UI%20Components/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/UI_Components/Map/Zoom_and_Center_the_Map/')
- [Map - Specify the Size](/concepts/05%20UI%20Components/Map/15%20Specify%20the%20Size.md '/Documentation/Guide/UI_Components/Map/Specify_the_Size/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/)
- [Map API Reference](/api-reference/10%20UI%20Components/dxMap '/Documentation/ApiReference/UI_Components/dxMap/')

[tags]map, provider, azure, google, api key, map type, hybrid, road map, satellite