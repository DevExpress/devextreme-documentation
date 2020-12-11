---
id: dxMap.Options.apiKey
type: String | Object
default: { bing: '', google: '', googleStatic: '' }
---
---
##### shortDescription
A key to authenticate the application within a map provider.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#mapContainer").dxMap({
            // ...
            apiKey: {
                bing: "MY_BING_MAPS_KEY",
                google: "MY_GOOGLE_MAPS_KEY",
                googleStatic: "MY_GOOGLE_STATIC_MAPS_KEY"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map ... >
        <dxo-api-key
            bing="MY_BING_MAPS_KEY"
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
                bing="MY_BING_MAPS_KEY"
                google="MY_GOOGLE_MAPS_KEY"
                googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
            />
        </DxMap>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Map, {
        ApiKey
    } from 'devextreme-react/map';

    const App = () => {
        return (
            <Map ... >
                <ApiKey
                    bing="MY_BING_MAPS_KEY"
                    google="MY_GOOGLE_MAPS_KEY"
                    googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
                />
            </Map>
        );
    }
    export default App;

---

[note] The value of this option cannot be changed dynamically.