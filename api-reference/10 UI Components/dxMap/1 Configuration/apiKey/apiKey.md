---
id: dxMap.Options.apiKey
type: String | Object
default: { azure: '', bing: '', google: '', googleStatic: '' }
---
---
##### shortDescription
Keys to authenticate the component within map providers.

---

If you have more than one map provider in your application, specify the keys in the object fields as shown below. Otherwise, you can assign the key directly to the **apiKey** property.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#mapContainer").dxMap({
            // ...
            apiKey: {
                azure: "MY_AZURE_MAPS_KEY",
                google: "MY_GOOGLE_MAPS_KEY",
                googleStatic: "MY_GOOGLE_STATIC_MAPS_KEY"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map ... >
        <dxo-api-key
            azure="MY_AZURE_MAPS_KEY"
            google="MY_GOOGLE_MAPS_KEY"
            googleStatic="MY_GOOGLE_STATIC_MAPS_KEY">
        </dxo-api-key>
    </dx-map>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent { }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxMapModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxMapModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap ... >
            <DxApiKey
                azure="MY_AZURE_MAPS_KEY"
                google="MY_GOOGLE_MAPS_KEY"
                googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
            />
        </DxMap>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMap, {
        DxApiKey
    } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap,
            DxApiKey
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Map, {
        ApiKey
    } from 'devextreme-react/map';

    const App = () => {
        return (
            <Map ... >
                <ApiKey
                    azure="MY_AZURE_MAPS_KEY"
                    google="MY_GOOGLE_MAPS_KEY"
                    googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
                />
            </Map>
        );
    }
    export default App;

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Map/ProvidersAndTypes/"
}

[note] The value of this property cannot be changed dynamically.