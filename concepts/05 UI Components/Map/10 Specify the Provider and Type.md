[important]

On May 21, 2024, Microsoft announced that [Bing Maps for Enterprise and its API will be discontinued](https://www.microsoft.com/en-us/maps/bing-maps/discontinued-services). [Azure Maps](https://azure.microsoft.com/en-us/products/azure-maps/) will be a single unified enterprise mapping platform available from Microsoft.

We are working on API compatible with Azure Maps and expect to ship it with our next major release (v24.2).
If you have an existing license to Bing Maps for Enterprise, you can continue using our existing API. You need to transition to new API until June 30, 2025 (free and basic license) or until June 30, 2028 (enterprise license).

The last date you can get a new license to Bing Maps for Enterprise is June 30, 2024. If you do not have an existing license after that date, you would not be able to use our map controls with Bing Maps or Azure Maps (until we release the new API). During that time, you can use other [map providers](/api-reference/10%20UI%20Components/dxMap/9%20Types/MapProvider.md '/Documentation/ApiReference/UI_Components/dxMap/Types/#MapProvider') supported by our controls, such as Google or GoogleStatic.

[/important]

By default, the Map UI component uses **Google Maps** as a map provider. It can use **Bing Maps** or **Google Static Maps** instead. To change the provider, assign one of the values listed below to the [provider](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "google" // or "bing" | "googleStatic"
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="google"> <!-- or "bing" | "googleStatic" -->
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
            provider="google"/> <!-- or "bing" | "googleStatic" -->
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
                    provider="google"/> {/* or "bing" | "googleStatic" */}
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
            provider: "bing",
            apiKey: {
                bing: "YOUR_BING_MAPS_API_KEY",
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
        provider="bing"
        [apiKey]="authentificationKeys">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        authentificationKeys = {
            bing: "YOUR_BING_MAPS_API_KEY",
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
            provider="bing"
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
                    bing: "YOUR_BING_MAPS_API_KEY",
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
        bing: "YOUR_BING_MAPS_API_KEY",
        google: "YOUR_GOOGLE_MAPS_API_KEY",
        googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
    };

    class App extends React.Component {
        render() {
            return (
                <Map
                    defaultZoom={10}
                    defaultCenter={centerCoordinates}
                    provider="bing"
                    apiKey={authentificationKeys}
                />
            );
        }
    }

    export default App;

---

The Map UI component supports the following map types: *"hybrid"*, *"satellite"* and *"roadmap"*, which is used by default. To change the map type, use the [type](/api-reference/10%20UI%20Components/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Components/dxMap/Configuration/#type') property. Note that **Bing Maps** call map types differ​ently​​, therefore Aerial and Road **Bing Maps** became *"hybrid"* and *"roadmap"*, respectively, in the Map UI component.

---
##### jQuery


    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "bing",
            type: "hybrid"
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="bing"
        type="hybrid">
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
            provider="bing"
            type="hybrid"
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
                    provider="bing"
                    type="hybrid"
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

[tags]map, provider, bing, google, api key, map type, hybrid, road map, satellite