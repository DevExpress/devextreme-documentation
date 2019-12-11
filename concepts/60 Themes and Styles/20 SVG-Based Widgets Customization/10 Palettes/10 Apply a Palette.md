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

In the **CircularGauge** and **LinearGauge**, the palette can be specified in the [rangeContainer](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/rangeContainer '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/rangeContainer/') and [subvalueIndicator](/api-reference/20%20Data%20Visualization%20Widgets/dxCircularGauge/1%20Configuration/subvalueIndicator '/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Configuration/subvalueIndicator/') objects. In the **TreeMap**, it is part of the [colorizer](/api-reference/20%20Data%20Visualization%20Widgets/dxTreeMap/1%20Configuration/colorizer '/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/colorizer/'). In the **VectorMap**, the palette should be set for a specific [layer](/api-reference/20%20Data%20Visualization%20Widgets/dxVectorMap/1%20Configuration/layers '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/layers/'). 

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
    });

##### Angular  

    <!--HTML-->
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

    <!--TypeScript-->
    import {
        DxCircularGaugeModule,
        DxTreeMapModule,
        DxVectorMapModule
    } from "devextreme-angular";
    import * as mapsData from "devextreme/dist/js/vectormap-data/world.js";
    // ...
    export class AppComponent {
        worldMap: any = mapsData.world;
        constructor(service: Service) {
            this.colorizeMap = this.colorizeMap.bind(this);
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
    @NgModule({
        imports: [
            // ...
            DxCircularGaugeModule,
            DxTreeMapModule,
            DxVectorMapModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
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
        </div>
    </template>
    <script>
    import { DxCircularGauge, DxRangeContainer, DxRange, DxSubvalueIndicator } from 'devextreme-vue/circular-gauge';
    import { DxTreeMap, DxColorizer } from 'devextreme-vue/tree-map';
    import { DxVectorMap, DxLayer } from 'devextreme-vue/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    export default {
        components: {
            DxCircularGauge,
            DxRangeContainer,
            DxRange,
            DxSubvalueIndicator,
            DxTreeMap,
            DxColorizer,
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
                        paletteIndex: paletteIndex == 7 ? paletteIndex = 0 : paletteIndex++
                    });
                });
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { CircularGauge, RangeContainer, Range } from 'devextreme-react/circular-gauge';
    import { TreeMap, Colorizer } from 'devextreme-react/tree-map';
    import { VectorMap, Layer } from 'devextreme-react/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    const subvalues = [25, 40, 68];

    const subvalueIndicator = {
        palette: 'Soft Pastel'
    };

    const worldMap = mapsData.world;

    class App extends React.Component {
        render() {
            return (
                <div>
                    <CircularGauge
                        subvalues={subvalues}
                        subvalueIndicator={subvalueIndicator}>
                        <RangeContainer palette="Violet">
                            <Range startValue={0} endValue={30} />
                            <Range startValue={30} endValue={70} />
                            <Range startValue={70} endValue={100} />
                        </RangeContainer>
                    </CircularGauge>

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
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Gauges/PaletteForRanges/",
    name: "Gauges"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Colorization/",
    name: "TreeMap"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/Palette/",
    name: "VectorMap"
}