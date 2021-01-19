A logarithmic axis indicates numeric values; each of them is the [logarithmBase](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#logarithmBase') value raised to some power. For example, **logarithmBase** that is equal to 10 produces the following values: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. That is so if the [tickInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tickInterval/') option is *1*. Changing  **tickInterval**, for example, to *2* removes every second value from this sequence, leaving the following: 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                tickInterval: 2,
                tick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            type="logarithmic"
            [tickInterval]="2">
            <dxo-tick [visible]="true"></dxo-tick>
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
                :tick-interval="2"
                type="logarithmic"
            >
                <DxTick :visible="true"/>
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTick
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTick
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Tick
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        type="logarithmic"
                        tickInterval={2}
                    >
                        <Tick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

As an alternative to **tickInterval**, you can use the [axisDivisionFactor](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/axisDivisionFactor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#axisDivisionFactor') option to arrange ticks. This option specifies the minimum distance between two side-by-side ticks in pixels.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                axisDivisionFactor: 20,
                tick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            type="logarithmic"
            [axisDivisionFactor]="20">
            <dxo-tick [visible]="true"></dxo-tick>
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
                type="logarithmic"
            >
                <DxTick :visible="true"/>
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTick
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTick
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Tick
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        type="logarithmic"
                        axisDivisionFactor={20}
                    >
                        <Tick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Axis Ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/')
- [Logarithmic Axis Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LogarithmicAxis)
