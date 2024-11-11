By default, the Map UI component uses **Google Maps** as a map provider. It can use **Azure Maps** or **Google Static Maps** instead. To change the provider, assign one of the values listed below to the [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "google" // or "azure" | "googleStatic"
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="google"> <!-- or "azure" | "googleStatic" -->
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
            provider="google"/> <!-- or "azure" | "googleStatic" -->
    </template>

    <script>
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
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    provider="google"/> {/* or "azure" | "googleStatic" */}
            );
        }
    }

    export default App;

---

When using maps, you should include an API key that authenticates your application. Specify this key using the [apiKey](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/apiKey '/Documentation/ApiReference/UI_Components/dxMap/Configuration/apiKey/') property. Note that this property can also accept an object with keys for every available provider. For more information on API keys, refer to the documentation of the specific map provider.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
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

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="azure"
        [apiKey]="authentificationKeys">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        authentificationKeys = {
            azure: "YOUR_AZURE_MAPS_API_KEY",
            google: "YOUR_GOOGLE_MAPS_API_KEY",
            googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
        }
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
            provider="azure"
            :apiKey="authentificationKeys"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxMap } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap
        },
        data() {
            return {
                centerCoordinates: { lat: 40.749825, lng: -73.987963 },
                authentificationKeys: {
                    azure: "YOUR_AZURE_MAPS_API_KEY",
                    google: "YOUR_GOOGLE_MAPS_API_KEY",
                    googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };
    const authentificationKeys = {
        azure: "YOUR_AZURE_MAPS_API_KEY",
        google: "YOUR_GOOGLE_MAPS_API_KEY",
        googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
    };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    provider="azure"
                    apiKey={authentificationKeys}
                />
            );
        }
    }

    export default App;

---

The Map UI component supports the following map types: *"hybrid"*, *"satellite"* and *"roadmap"* (default). To change the map type, use the [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type') property. **Azure Maps** names map types differently. In the Map UI component, *satellite_road_labels* and *road* become *"hybrid"* and *"roadmap"*.

---
##### jQuery


    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "azure",
            type: "satellite"
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="azure"
        type="satellite">
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
            provider="azure"
            type="satellite"
        />
    </template>

    <script>
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
    import 'devextreme/dist/css/dx.light.css';

    import { Map } from 'devextreme-react/map';

    const centerCoordinates = { lat: 40.749825, lng: -73.987963 };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    provider="azure"
                    type="satellite"
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Map - Zoom and Center the Map](/concepts/05%20UI%20Components/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/UI_Components/Map/Zoom_and_Center_the_Map/')
- [Map - Specify the Size](/concepts/05%20UI%20Components/Map/15%20Specify%20the%20Size.md '/Documentation/Guide/UI_Components/Map/Specify_the_Size/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes)
- [Map API Reference](/api-reference/10%20UI%20Components/dxMap '/Documentation/ApiReference/UI_Components/dxMap/')

[tags]map, provider, azure, google, api key, map type, hybrid, road map, satellite