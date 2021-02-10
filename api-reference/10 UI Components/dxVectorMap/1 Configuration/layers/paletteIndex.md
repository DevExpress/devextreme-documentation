---
id: dxVectorMap.Options.layers.paletteIndex
type: Number
---
---
##### shortDescription
The position of a color in the [palette[]](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#palette) array. Should not exceed the value of the [paletteSize](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#paletteSize) property. 

---

Use this property to specify the color for each [layer element](/Documentation/ApiReference/UI_Components/dxVectorMap/Map_Elements/Layer_Element/) within the [customize](/Documentation/ApiReference/UI_Components/dxVectorMap/Configuration/layers/#customize) function.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#vectorMapContainer").dxVectorMap({
            // ...
            layers: [{
                dataSource: DevExpress.viz.map.sources.world,
                palette: "Material",
                paletteSize: 4,
                customize: function(elements) {
                    var paletteIndex = 0;
                    $.each(elements, function(_, element) {
                        element.applySettings({
                            paletteIndex: paletteIndex == 4 ? paletteIndex = 0 : paletteIndex++
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
            [paletteSize]="4"
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
            let paletteIndex = 0;
            elements.forEach((element) => {
                element.applySettings({
                    paletteIndex: paletteIndex == 4 ? paletteIndex = 0 : paletteIndex++
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
                :palette-size="4"
                :customize="colorizeMap" 
            />
        </DxVectorMap>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
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
                let paletteIndex = 0;
                elements.forEach((element) => {
                    element.applySettings({
                        paletteIndex: paletteIndex == 4 ? paletteIndex = 0 : paletteIndex++
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { VectorMap, Layer } from 'devextreme-react/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js'

    const worldMap = mapsData.world;

    export default function App() {
        return (
            <VectorMap>
                <Layer
                    dataSource={worldMap}
                    paletteSize={4}
                    customize={this.colorizeMap}
                    palette="Material" 
                />
            </VectorMap>
        );
    }

---

#####See Also#####
- [SVG-Based Widgets Customization](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/)