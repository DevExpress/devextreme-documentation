---
id: dxMap.Options.key
type: String | Object
default: { bing: '', google: '', googleStatic: '' }
dep: dxMap.Options.apiKey
---
---
##### shortDescription
A key used to authenticate the application within the required map provider.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#mapContainer").dxMap({
            // ...
            key: {
                bing: "MY_BING_MAPS_KEY",
                google: "MY_GOOGLE_MAPS_KEY",
                googleStatic: "MY_GOOGLE_STATIC_MAPS_KEY"
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-map ... >
        <dxo-key
            bing="MY_BING_MAPS_KEY"
            google="MY_GOOGLE_MAPS_KEY"
            googleStatic="MY_GOOGLE_STATIC_MAPS_KEY">
        </dxo-key>
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
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxMap ... >
            <DxKey
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
        DxKey
    } from 'devextreme-vue/map';

    export default {
        components: {
            DxMap,
            DxKey
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Map, {
        Key
    } from 'devextreme-react/map';

    class App extends React.Component {
        render() {
            return (
                <Map ... >
                    <Key
                        bing="MY_BING_MAPS_KEY"
                        google="MY_GOOGLE_MAPS_KEY"
                        googleStatic="MY_GOOGLE_STATIC_MAPS_KEY"
                    />
                </Map>
            );
        }
    }
    export default App;

---

[note] The value of this property cannot be changed dynamically.