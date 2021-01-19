A continuous axis indicates numeric or date-time values. If you know the range of these values, you can arrange ticks using the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tickInterval/') option. It specifies the interval between two side-by-side [major ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/'). For numeric values, this option accepts a number; for date-time values, it accepts a string or an object with a single field that designates the date component measuring the interval. Similarly, you can arrange [minor ticks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/') using the [minorTickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTickInterval/') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                tickInterval: 10,
                minorTickInterval: 2,

                // === or ===
                tickInterval: { years: 1 },
                minorTickInterval: { months: 6 },

                // === or ===
                tickInterval: 'year',
                minorTickInterval: 'month',

                // Making ticks visible
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [tickInterval]="10"
            [minorTickInterval]="2">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>

        <!-- or -->
        <dxo-argument-axis>
            <dxo-tick-interval [years]="1"></dxo-tick-interval>
            <dxo-minor-tick-interval [months]="6"></dxo-minor-tick-interval>
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>

        <!-- or -->
        <dxo-argument-axis
            tickInterval="year"
            minorTickInterval="month">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxArgumentAxis
                :tick-interval="10"
                :minor-tick-interval="2"
            >
                <DxTick :visible="true"/>
                <DxMinorTick :visible="true"/>
            </DxArgumentAxis>

            <!-- or -->
            <DxArgumentAxis>
                <DxTickInterval :years="1"/>
                <DxMinorTickInterval :months="6"/>
                <DxTick :visible="true"/>
                <DxMinorTick :visible="true"/>
            </DxArgumentAxis>

            <!-- or -->
            <DxArgumentAxis
                tick-interval="year"
                minor-tick-interval="month"
            >
                <DxTick :visible="true"/>
                <DxMinorTick :visible="true"/>
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTick,
        DxMinorTick,
        DxTickInterval,
        DxMinorTickInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTick,
            DxMinorTick,
            DxTickInterval,
            DxMinorTickInterval
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Tick,
        MinorTick,
        TickInterval,
        MinorTickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        tickInterval={10}
                        minorTickInterval={2}
                    >
                        <Tick visible={true} />
                        <MinorTick visible={true} />
                    </ArgumentAxis>

                    {/* or */}
                    <ArgumentAxis>
                        <TickInterval years={1} />
                        <MinorTickInterval months={6} />
                        <Tick visible={true} />
                        <MinorTick visible={true} />
                    </ArgumentAxis>

                    {/* or */}
                    <ArgumentAxis
                        tickInterval="year"
                        minorTickInterval="month"
                    >
                        <Tick visible={true} />
                        <MinorTick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

Without knowing the range of values on the axis, you can arrange major ticks by specifying the minimum distance between two side-by-side ticks in pixels. For this purpose, set the [axisDivisionFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#axisDivisionFactor') option. Minor ticks in this case should be arranged using the [minorTickCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#minorTickCount') option. It specifies how many minor ticks to place between two side-by-side major ticks.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                axisDivisionFactor: 20,
                minorTickCount: 4,

                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [axisDivisionFactor]="20"
            [minorTickCount]="4">
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxArgumentAxis
                :axis-division-factor="20"
                :minor-tick-count="4"
            >
                <DxTick :visible="true"/>
                <DxMinorTick :visible="true"/>
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTick,
        DxMinorTick
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTick,
            DxMinorTick
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Tick,
        MinorTick
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        axisDivisionFactor={20}
                        minorTickCount={4}
                    >
                        <Tick visible={true} />
                        <MinorTick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---
