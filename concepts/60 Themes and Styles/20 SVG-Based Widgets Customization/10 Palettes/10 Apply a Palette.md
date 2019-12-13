Every widget that supports palettes has a [palette](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/palette.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#palette') option. It accepts the name of a predefined or [registered custom palette](/concepts/60%20Themes%20and%20Styles/20%20SVG-Based%20Widgets%20Customization/10%20Palettes/20%20Implement%20a%20Custom%20Palette.md '/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Palettes/Implement_a_Custom_Palette') or an array of colors. In most widgets, this option should be set on the first level of the configuration object:

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            palette: "Harmony Light"
            // ===== or custom colors =====
            // palette: ['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69']
        });
    });

##### Angular  

    <!--HTML-->
    <dx-pie-chart ... 
        palette="Harmony Light">
        <!-- or custom colors -->
        <!-- [palette]="['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69']"> -->
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <template>
        <dx-pie-chart ...
            palette="Harmony Light">
            <!-- or custom colors -->
            <!-- :palette="['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69']"> -->
        </dx-pie-chart>
    </template>

    <script>
    import { DxPieChart } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        }
    }
    </script>

##### React

    import React from 'react';
    import { PieChart } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    palette="Harmony Light">
                    // ===== or custom colors =====
                    // palette={['#60a69f', '#78b6d9', '#6682bb', '#a37182', '#eeba69']}>
                </PieChart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Palette/"
}

In the **CircularGauge** and **LinearGauge**, the palette can be specified in the [rangeContainer](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/rangeContainer '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/') and [subvalueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/subvalueIndicator '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/subvalueIndicator/') objects.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#circularGaugeContainer").dxCircularGauge({
            // ...
            subvalues: [25, 40, 68],
            subvalueIndicator: {
                palette: "Soft Pastel"
            },
            rangeContainer: {
                ranges: [
                    { startValue: 0, endValue: 30 },
                    { startValue: 30, endValue: 70 },
                    { startValue: 70, endValue: 100 },
                ],
                palette: "Violet"
            }
        });
    });

##### Angular  

    <!-- tab: app.component.html -->
    <dx-circular-gauge ...
        [subvalues]="[25, 40, 68]">
        <dxo-subvalue-indicator
            palette="Soft Pastel">
        </dxo-subvalue-indicator>
        <dxo-range-container palette="Harmony Light">
            <dxi-range [startValue]="0" [endValue]="30"></dxi-range>
            <dxi-range [startValue]="30" [endValue]="70"></dxi-range>
            <dxi-range [startValue]="70" [endValue]="100"></dxi-range>
        </dxo-range-container>
    </dx-circular-gauge>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxCircularGaugeModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxCircularGaugeModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-circular-gauge ...
            :subvalues="[25, 40, 68]">
            <dx-subvalue-indicator
                palette="Soft Pastel" />
            <dx-range-container palette="Harmony Light">
                <dx-range :start-value="0" :end-value="30" />
                <dx-range :start-value="30" :end-value="70" />
                <dx-range :start-value="70" :end-value="100" />
            </dx-range-container>
        </dx-circular-gauge>
    </template>
    <script>
    import {
        DxCircularGauge,
        DxRangeContainer,
        DxRange,
        DxSubvalueIndicator
    } from 'devextreme-vue/circular-gauge';

    export default {
        components: {
            DxCircularGauge,
            DxRangeContainer,
            DxRange,
            DxSubvalueIndicator
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { CircularGauge, RangeContainer, Range, SubvalueIndicator } from 'devextreme-react/circular-gauge';

    const subvalues = [25, 40, 68];

    class App extends React.Component {
        render() {
            return (
                <CircularGauge
                    subvalues={subvalues}>
                    <SubvalueIndicator palette="Soft Pastel" />
                    <RangeContainer palette="Violet">
                        <Range startValue={0} endValue={30} />
                        <Range startValue={30} endValue={70} />
                        <Range startValue={70} endValue={100} />
                    </RangeContainer>
                </CircularGauge>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/PaletteForRanges/"
}

In the **TreeMap**, the palette is part of the [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/'). In the **VectorMap**, it should be set for a specific [layer](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/'). In the **RangeSelector**, the palette is specified in the [chart](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/chart '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/') object.

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#treeMapContainer").dxTreeMap({
            // ...
            colorizer: {
                palette: "Violet"
            }
        });

        $("#vectorMapContainer").dxVectorMap({
            // ...
            layers: [{
                dataSource: DevExpress.viz.map.sources.world,
                palette: "Violet",
                paletteSize: 7,
                customize: function(elements) {
                    var paletteIndex = 0;
                    $.each(elements, function(_, element) {
                        element.applySettings({
                            paletteIndex: paletteIndex == 7 ? paletteIndex = 0 : paletteIndex++
                        });
                    });
                }
            }]
        });

        $("#rangeSelectorContainer").dxRangeSelector({
            dataSource: [
                { arg: "A", val1: 1, val2: 3 },
                { arg: "B", val1: 5, val2: 5 },
                { arg: "C", val1: 10, val2: 7 }
            ],
            chart: {
                palette: "Soft Pastel",
                commonSeriesSettings: {
                    type: "bar",
                    argumentField: "arg"
                },
                series: [
                    { valueField: "val1" },
                    { valueField: "val2" }
                ]
            }
        });
    });

##### Angular  

    <!-- tab: app.component.html -->
    <dx-tree-map ... >
        <dxo-colorizer palette="Harmony Light"></dxo-colorizer>
    </dx-tree-map>

    <dx-vector-map ... >
        <dxi-layer
            [dataSource]="worldMap"
            palette="Violet" 
            [paletteSize]="7"
            [customize]="colorizeMap">
        </dxi-layer>
    </dx-vector-map>

    <dx-range-selector
        [dataSource]="[
            { arg: 'A', val1: 1, val2: 3 },
            { arg: 'B', val1: 5, val2: 5 },
            { arg: 'C', val1: 10, val2: 7 }
        ]">
        <dxo-chart palette="Soft Pastel">
            <dxo-common-series-settings type="bar" argumentField="arg"></dxo-common-series-settings>
            <dxi-series value-field="val1"></dxi-series>
            <dxi-series value-field="val2"></dxi-series>
        </dxo-chart>
    </dx-range-selector>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        constructor(service: Service) {
            this.colorizeMap = this.colorizeMap.bind(this);
        }

        worldMap: any = mapsData.world;

        colorizeMap(elements) {
            let paletteIndex = 0;
            elements.forEach((element) => {
                 element.applySettings({
                    paletteIndex: paletteIndex == 7 ? paletteIndex = 0 : paletteIndex++
                });
            });
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxTreeMapModule, DxVectorMapModule, DxRangeSelector } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxTreeMapModule,
            DxVectorMapModule,
            DxRangeSelector
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <dx-tree-map ... >
                <dx-colorizer palette="Harmony Light" />
            </dx-tree-map>

            <dx-vector-map ... >
                <dx-layer
                    :data-source="worldMap"
                    palette="Violet" 
                    :palette-size="7"
                    :customize="colorizeMap" />
            </dx-vector-map>

            <dx-range-selector
                :data-source="[
                    { arg: 'A', val1: 1, val2: 3 },
                    { arg: 'B', val1: 5, val2: 5 },
                    { arg: 'C', val1: 10, val2: 7 }
                ]">
                <dx-chart palette="Soft Pastel">
                    <dx-common-series-settings type="bar" argument-field="arg" />
                    <dx-series value-field="val1" />
                    <dx-series value-field="val2" />
                </dx-chart>
            </dx-range-selector>
        </div>
    </template>
    <script>
    import { DxTreeMap, DxColorizer } from 'devextreme-vue/tree-map';
    import { DxVectorMap, DxLayer } from 'devextreme-vue/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
    import {
        DxRangeSelector,
        DxChart,
        DxCommonSeriesSettings,
        DxSeries
    } from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxTreeMap,
            DxColorizer,
            DxVectorMap,
            DxLayer,
            DxRangeSelector,
            DxChart,
            DxCommonSeriesSettings,
            DxSeries
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
                        paletteIndex: paletteIndex == 7 ? paletteIndex = 0 : paletteIndex++
                    });
                });
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import { TreeMap, Colorizer } from 'devextreme-react/tree-map';
    import { VectorMap, Layer } from 'devextreme-react/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';
    import {
        RangeSelector,
        Chart,
        Series,
        CommonSeriesSettings
    } from 'devextreme-react/range-selector';


    const worldMap = mapsData.world;

    class App extends React.Component {
        render() {
            return (
                <div>
                    <TreeMap ... >
                        <Colorizer palette="Violet" />
                    </TreeMap>

                    <VectorMap>
                        <Layer
                            dataSource={worldMap}
                            paletteSize={7}
                            customize={this.colorizeMap}
                            palette="Violet" />
                    </VectorMap>

                    <RangeSelector
                        dataSource={[
                            { arg: 'A', val1: 1, val2: 3 },
                            { arg: 'B', val1: 5, val2: 5 },
                            { arg: 'C', val1: 10, val2: 7 }
                        ]}>
                        <Chart palette="Soft Pastel">
                            <CommonSeriesSettings type="bar" argumentField="arg" />
                            <Series valueField="val1" />
                            <Series valueField="val2" />
                        </Chart>
                    </RangeSelector>
                </div>
            );
        }

        colorizeMap(elements) {
            let paletteIndex = 0;
            elements.forEach((element) => {
                element.applySettings({
                    paletteIndex: paletteIndex == 7 ? paletteIndex = 0 : paletteIndex++
                });
            });
        }
    }

    export default App;

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Colorization/",
    name: "TreeMap"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/Palette/",
    name: "VectorMap"
}