By default, the **Map** widget uses **Google Maps** as a map provider. It can use **Bing Maps** or **Google Static Maps** instead. To change the provider, assign one of the values listed below to the [provider](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/provider.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#provider') option.

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

---

When using maps, you should include an API key that authenticates your application. Specify this key using the [key](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/key '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/key/') option. Note that this option can also accept an object with keys for every available provider. For more information on API keys, refer to the documentation of the specific map provider.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#mapContainer").dxMap({
            center: { lat: 40.749825, lng: -73.987963 },
            zoom: 10,
            provider: "bing",
            key: {
                bing: BING_API_KEY,
                google: GOOGLE_API_KEY,
                googleStatic: GOOGLE_STATIC_API_KEY
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-map
        [center]="{ lat: 40.749825, lng: -73.987963 }"
        [zoom]="10"
        provider="bing"
        [key]="authentificationKeys">
    </dx-map>

    <!--TypeScript-->
    import { DxMapModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        authentificationKeys = {
            bing: this.BING_API_KEY,
            google: this.GOOGLE_API_KEY,
            googleStatic: this.GOOGLE_STATIC_API_KEY
        }
    }
    @NgModule({
        imports: [
            // ...
            DxMapModule
        ],
        // ...
    })

---

The **Map** widget supports the following map types: *"hybrid"*, *"satellite"* and *"roadmap"*, which is used by default. To change the map type, use the [type](/api-reference/10%20UI%20Widgets/dxMap/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/#type') option. Note that **Bing Maps** call map types differ​ently​​, therefore Aerial and Road **Bing Maps** became *"hybrid"* and *"roadmap"*, respectively, in the **Map** widget.

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

---

#####See Also#####
- [Map - Zoom and Center the Map](/concepts/05%20Widgets/Map/05%20Zoom%20and%20Center%20the%20Map.md '/Documentation/Guide/Widgets/Map/Zoom_and_Center_the_Map/')
- [Map - Specify the Size](/concepts/05%20Widgets/Map/15%20Specify%20the%20Size.md '/Documentation/Guide/Widgets/Map/Specify_the_Size/')
- [Map Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes)
- [Map API Reference](/api-reference/10%20UI%20Widgets/dxMap '/Documentation/ApiReference/UI_Widgets/dxMap/')

[tags]map, provider, bing, google, api key, map type, hybrid, road map, satellite