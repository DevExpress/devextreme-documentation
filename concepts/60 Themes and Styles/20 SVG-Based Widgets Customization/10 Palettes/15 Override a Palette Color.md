Set a widget element's **color** option to override a palette color for this element:

---
##### jQuery  

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                color: "red",
                // ...
            }, { /* ... */ }, { /* ... */ }]
        });

        $("#circularGaugeContainer").dxCircularGauge({
            // ...
            rangeContainer: {
                ranges: [{
                    color: "red"
                    // ...
                }, { /* ... */ }, { /* ... */ }]
            }
        });

        $("#vectorMapContainer").dxVectorMap({
            // ...
            layers: [{
                // ...
                customize: function(elements) {
                    $.each(elements, function(_, element) {
                        element.applySettings({
                            color: "red"
                        });
                    });
                }
            }, { /* ... */ }, { /* ... */ }]
        });
    });

##### Angular  

    <!--HTML-->
    <dx-chart ... >
        <dxi-series color="red" ... ></dxi-series>
    </dx-chart>

    <dx-circular-gauge ... >
        <dxo-range-container>
            <!-- ... -->
            <dxi-range color="red" ... ></dxi-range>
        </dxo-range-container>
    </dx-circular-gauge>

    <dx-vector-map ... >
        <dxi-layer ...
            [customize]="colorizeMap">
        </dxi-layer>
    </dx-vector-map>

    <!--TypeScript-->
    import {
        DxChartModule,
        DxCircularGaugeModule,
        DxVectorMapModule
    } from "devextreme-angular";
    import * as mapsData from "devextreme/dist/js/vectormap-data/world.js";
    // ...
    export class AppComponent {
        worldMap: any = mapsData.world;
        constructor() {
            this.colorizeMap = this.colorizeMap.bind(this);
        }
        colorizeMap(elements) {
            elements.forEach((element) => {
                 element.applySettings({
                    color: "red"
                });
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <template>
        <div>
            <dx-chart ... >
                <dx-series color="red" ... />
            </dx-chart>

            <dx-circular-gauge ... >
                <dx-range-container ... >
                    <dx-range color="red" ... />
                </dx-range-container>
            </dx-circular-gauge>

            <dx-vector-map ... >
                <dx-layer ...
                    :customize="colorizeMap" />
            </dx-vector-map>
        </div>
    </template>
    <script>
    import { DxChart, DxSeries } from 'devextreme-vue/tree-map';
    import { DxCircularGauge, DxRangeContainer, DxRange } from 'devextreme-vue/circular-gauge';
    import { DxVectorMap, DxLayer } from 'devextreme-vue/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCircularGauge,
            DxRangeContainer,
            DxRange,
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
                elements.forEach((element) => {
                    element.applySettings({
                        color: 'red'
                    });
                });
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import { Chart, Series } from 'devextreme-react/chart';
    import { CircularGauge, RangeContainer, Range } from 'devextreme-react/circular-gauge';
    import { VectorMap, Layer } from 'devextreme-react/vector-map';
    import * as mapsData from 'devextreme/dist/js/vectormap-data/world.js';

    const worldMap = mapsData.world;

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Chart ... >
                        <Series color="red" ... />
                    </Chart>

                    <CircularGauge ... >
                        <RangeContainer ... >
                            <Range color="red" ... />
                        </RangeContainer>
                    </CircularGauge>

                    <VectorMap>
                        <Layer ...
                            customize={this.colorizeMap} />
                    </VectorMap>
                <div>
            );
        }

        colorizeMap(elements) {
            elements.forEach((element) => {
                element.applySettings({
                    color: 'red'
                });
            });
        }
    }

    export default App;

---