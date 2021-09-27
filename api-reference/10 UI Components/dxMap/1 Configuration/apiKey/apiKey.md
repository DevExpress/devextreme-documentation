---
id: dxMap.Options.apiKey
type: String | Object
default: { bing: '', google: '', googleStatic: '' }
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

    #include angular-component-decorator
    export class AppComponent { }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

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
                    bing="MY_BING_MAPS_KEY"
                    google="MY_GOOGLE_MAPS_KEY"
                    googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
                />
            </Map>
        );
    }
    export default App;

---

[note] The value of this property cannot be changed dynamically.
