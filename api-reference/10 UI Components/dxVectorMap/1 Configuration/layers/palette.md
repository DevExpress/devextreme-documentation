---
id: dxVectorMap.Options.layers.palette
acceptValues: 'Bright' | 'Harmony Light' | 'Ocean' | 'Pastel' | 'Soft' | 'Soft Pastel' | 'Vintage' | 'Violet' | 'Carmine' | 'Dark Moon' | 'Dark Violet' | 'Green Mist' | 'Soft Blue' | 'Material' | 'Office'
type: Array<String> | String
default: 'Material'
---
---
##### shortDescription
The name of a predefined palette or a custom range of colors to be used as a palette.

---
A palette defines a range of colors that are used to paint layer elements. This range is divided into segments by the value of the [paletteSize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/paletteSize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#paletteSize') property. Each segment contributes a color to the resulting array of colors. The more segments there are, the greater the variety of colors in this array. Available predefined palettes are listed in the accepted values.

Use the [paletteIndex](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/paletteIndex.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#paletteIndex') to iterate through the **palette[]** array within the [customize](/api-reference/10%20UI%20Components/dxVectorMap/1%20Configuration/layers/customize.md '/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize') function. For each element, apply the palette as follows:


---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#vectorMapContainer").dxVectorMap({
            // ...
            layers: [{
                dataSource: DevExpress.viz.map.sources.world,
                palette: "Material",
                paletteSize: 7,
                customize: function(elements) {
                    elements.forEach(function(element, index) {
                        element.applySettings({
                            paletteIndex: index % 7
                        });
                    });
                }
            }]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-vector-map ... >
        <dxi-layer
            [dataSource]="worldMap"
            palette="Material" 
            [paletteSize]="7"
            [customize]="colorizeMap">
        </dxi-layer>
    </dx-vector-map>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor() {
            this.colorizeMap = this.colorizeMap.bind(this);
        }

        worldMap: any = mapsData.world;

        colorizeMap(elements) {
            elements.forEach((element, index) => {
                element.applySettings({
                    paletteIndex: index % 7
                });
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxVectorMapModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxVectorMapModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxVectorMap ... >
            <DxLayer
                :data-source="worldMap"
                palette="Material" 
                :palette-size="7"
                :customize="colorizeMap" 
            />
        </DxVectorMap>
    </template>

    <script>
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    import DxVectorMap, {
        DxLayer
    } from 'devextreme-vue/vector-map';

    export default {
        components: {
            DxVectorMap,
            DxLayer
        },
        data() {
            return {
                worldMap: mapsData.world
            }
        },
        methods: {
            colorizeMap(elements) {
                elements.forEach((element, index) => {
                    element.applySettings({
                        paletteIndex: index % 7
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import { VectorMap, Layer } from 'devextreme-react/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js'

    const worldMap = mapsData.world;

    function colorizeMap(elements) {
        elements.forEach((element, index) => {
            element.applySettings({
                paletteIndex: index % 7
            });
        });
    }

    export default function App() {
        return (
            <VectorMap>
                <Layer
                    dataSource={worldMap}
                    paletteSize={7}
                    customize={this.colorizeMap}
                    palette="Material" 
                />
            </VectorMap>
        );
    }

---


#include common-ref-enum with {
    enum: "`VizPalette`",
    values: "`Default`, `SoftPastel`, `HarmonyLight`, `Pastel`, `Bright`, `Soft`, `Ocean`, `Vintage`, `Violet`, `Carmine`, `DarkMoon`, `SoftBlue`, `DarkViolet`, and `GreenMist`"
}
