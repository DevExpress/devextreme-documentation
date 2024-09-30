---
id: dxMap.Options.providerConfig
type: Object
default: { mapId: '', useAdvancedMarkers: true }
---
---
##### shortDescription
A [provider](/Documentation/ApiReference/UI_Components/dxMap/Configuration/#provider) configuration object.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#map").dxMap({
            apiKey: "YOUR_API_KEY",
            provider: "google",
            providerConfig: {
                mapId: "YOUR_GOOGLE_MAP_ID"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map ... 
        provider="google"
        apiKey="YOUR_API_KEY"
    >
        <dxo-provider-config
            mapId="YOUR_GOOGLE_MAP_ID"
        >
        </dxo-provider-config>
    </dx-map>

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
        <DxMap ... 
            provider="google"
            api-key="YOUR_API_KEY"
        >
            <DxProviderConfig 
                map-id="YOUR_GOOGLE_MAP_ID"
            />
        </DxMap>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxMap, {
        DxProviderConfig
    } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap,
            DxProviderConfig
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Map, {
        ProviderConfig
    } from 'devextreme-react/map';

    const App = () => {
        return (
            <Map ... 
                provider="google"
                apiKey="YOUR_API_KEY"
            >
                <ProviderConfig 
                    mapId="YOUR_GOOGLE_MAP_ID"
                />
            </Map>
        );
    }
    export default App;

---