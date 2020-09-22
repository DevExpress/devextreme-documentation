The **Chart** can be zoomed and panned using the [RangeSelector](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/') widget. The following code shows how to bind these widgets. Note that the **Chart** and **RangeSelector** have a common data source and may have the same series configuration if the **RangeSelector** should display the **Chart** in the background.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // Common data source for both widgets
        var data = [ ... ];
        // Common series configuration for both widgets
        var seriesConfiguration = [ ... ];

        var chart = $("#chartContainer").dxChart({
            dataSource: data,
            series: seriesConfiguration
        }).dxChart("instance");

        $("#rangeSelectorContainer").dxRangeSelector({
            dataSource: data,
            // Displays the Chart in the background of the RangeSelector
            chart: {
                series: seriesConfiguration
            },
            onValueChanged: function (e) {
                // Zooms the Chart
                chart.getArgumentAxis().visualRange(e.value);
            },
            // Makes zooming and panning smoother
            behavior: { callValueChanged: "onMoving" }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        [dataSource]="data"
        [series]="seriesConfiguration">
        <dxo-argument-axis
            [(visualRange)]="chart_visualRange">
        </dxo-argument-axis>
    </dx-chart>
    <dx-range-selector
        [dataSource]="data"
        [(value)]="chart_visualRange">
        <!-- Displays the Chart in the background of the RangeSelector -->
        <dxo-chart [series]="seriesConfiguration"></dxo-chart>
        <!-- Makes zooming and panning smoother -->
        <dxo-behavior callValueChanged="onMoving"></dxo-behavior>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        chart_visualRange = [ ... ];
        // Common data source for both widgets
        data = [ ... ];
        // Common series configuration for both widgets
        seriesConfiguration = [ ... ];
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxRangeSelectorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart
            :data-source="data"
            :series="seriesConfiguration">
            <DxArgumentAxis :visual-range="chart_visualRange"/>
        </DxChart>
        <DxRangeSelector
            :data-source="data"
            v-model:value="chart_visualRange">
            <!-- Displays the Chart in the background of the RangeSelector -->
            <DxRsChart :series="seriesConfiguration"/>
            <!-- Makes zooming and panning smoother -->
            <DxBehavior call-value-changed="onMoving"/>
        </DxRangeSelector>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis
    } from 'devextreme-vue/chart';
    import DxRangeSelector, {
        DxChart as DxRsChart,
        DxBehavior
    } from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxRangeSelector,
            DxRsChart,
            DxBehavior
        },
        data() {
            return {
                chart_visualRange: [ ... ],
                // Common data source for both widgets
                data: [ ... ],
                // Common series configuration for both widgets
                seriesConfiguration: [ ... ]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis
    } from 'devextreme-react/chart';
    import RangeSelector, {
        Chart as RsChart,
        Behavior
    } from 'devextreme-react/range-selector';

    // Common data source for both widgets
    const data = [ ... ];
    // Common series configuration for both widgets
    const seriesConfiguration = [ ... ];

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { chart_visualRange: [ ... ] };
            this.updateChartVisualRange = () => this.setState({ chart_visualRange: e.value });
        }

        render() {
            return (
                <Chart
                    dataSource={data}
                    series={seriesConfiguration}>
                    <ArgumentAxis visualRange={this.state.chart_visualRange} />
                </Chart>
                <RangeSelector
                    dataSource={data}
                    onValueChanged={this.updateChartVisualRange}>
                    {/* Displays the Chart in the background of the RangeSelector */}
                    <RsChart series={seriesConfiguration} />
                    {/* Makes zooming and panning smoother */}
                    <Behavior callValueChanged="onMoving" />
                </RangeSelector>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrollingAPI/"
}

When your data source is updated in real time, the behavior of both the **Chart**'s [visual range](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/Widgets/Chart/Axes/Visual_and_Whole_Ranges/') and the **RangeSelector**'s selected range depends on the [selectedRangeUpdateMode](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/selectedRangeUpdateMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#selectedRangeUpdateMode') option specified for the **RangeSelector**:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            selectedRangeUpdateMode: "keep" // the ranges remain unchanged
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... ></dx-chart>
    <dx-range-selector ... 
        selectedRangeUpdateMode="keep"> <!-- the ranges remain unchanged -->
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxRangeSelectorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
        </DxChart>
        <DxRangeSelector ...
            selected-range-update-mode="keep"> <!-- the ranges remain unchanged -->
        </DxRangeSelector>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';
    import DxRangeSelector from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxChart,
            DxRangeSelector
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';
    import RangeSelector from 'devextreme-react/range-selector';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                </Chart>
                <RangeSelector ...
                    selectedRangeUpdateMode="keep"> {/* the ranges remain unchanged */}
                </RangeSelector>
            );
        }
    }

    export default App;

---


If you need to fix the zoom window and allow users to only move it along the scale, set the [scale](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/') object's [minRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/minRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/minRange/') and [maxRange](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/maxRange '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/maxRange/') options to a single value defining the zoom window's length. Make sure you specify the initial zoom factor using the [value](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value') option.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            scale: {
                minRange: 10,
                maxRange: 10
            },
            value: [0, 10]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... ></dx-chart>
    <dx-range-selector ... 
        [value]="[0, 10]">
        <dxo-scale [minRange]="10" [maxRange]="10"></dxo-scale>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule,
            DxRangeSelectorModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
        </DxChart>
        <DxRangeSelector ...
            v-model="range">
            <DxScale
                :min-range="10"
                :max-range="10"
            />
        </DxRangeSelector>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';
    import DxRangeSelector, {
        DxScale
    } from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxChart,
            DxRangeSelector,
            DxScale
        },
        data() {
            return {
                range: [0, 10]
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';
    import RangeSelector, {
        Scale
    } from 'devextreme-react/range-selector';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                </Chart>
                <RangeSelector ...
                    defaultValue={[0, 10]}>
                    <Scale
                        minRange={10}
                        maxRange={10}
                    />
                </RangeSelector>
            );
        }
    }

    export default App;

---

#####See Also#####
- [RangeSelector - Scale](/concepts/05%20Widgets/RangeSelector/10%20Visual%20Elements/10%20Scale '/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/#Scale')
