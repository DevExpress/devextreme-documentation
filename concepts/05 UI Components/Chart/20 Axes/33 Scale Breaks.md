A scale break allows breaking off a part of the axis to improve the readability of a chart with high amplitude values. Scale breaks are available for continuous or logarithmic [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type') axes only.

![DevExtreme HTML5 JavaScript Charts Scale Breaks](/images/ChartJS/visual_elements/scale-breaks_val-axis.png)

Use an axis' [breaks](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/breaks '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/breaks/') array to declare a scale break collection. Each object in this array must have the **startValue** and **endValue** fields that limit a single scale break. Note that a scale break is visible only if the range between the start and end values exceeds the tick interval.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: { // or argumentAxis
                breaks: [
                    { startValue: 100, endValue: 500 },
                    { startValue: 1000, endValue: 2000 }
                ]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis> <!-- or <dxo-argument-axis> -->
            <dxi-break [startValue]="100" [endValue]="500"></dxi-break>
            <dxi-break [startValue]="1000" [endValue]="2000"></dxi-break>
        </dxi-value-axis>
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
            <DxValueAxis> <!-- or DxArgumentAxis -->
                <DxBreak
                    :start-value="100"
                    :end-value="500"
                />
                <DxBreak
                    :start-value="1000"
                    :end-value="2000"
                />
            </DxValueAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxValueAxis,
        DxBreak
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxValueAxis,
            DxBreak
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ValueAxis,
        Break
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis> {/* or ArgumentAxis */}
                        <Break
                            startValue={100}
                            endValue={500}
                        />
                        <Break
                            startValue={1000}
                            endValue={2000}
                        />
                    </ValueAxis>
                </Chart>
            );
        }
    }

    export default App;

---

The value axis supports auto-calculated scale breaks, which can be enabled by setting the [autoBreaksEnabled](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/autoBreaksEnabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#autoBreaksEnabled') property to **true**. You can specify the [maxAutoBreakCount](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/valueAxis/maxAutoBreakCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#maxAutoBreakCount') property to limit the number of a scale breaks the UI component can generate.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                autoBreaksEnabled: true,
                maxAutoBreakCount: 2
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis
            [autoBreaksEnabled]="true"
            [maxAutoBreakCount]="2">
        </dxi-value-axis>
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
            <DxValueAxis
                :auto-breaks-enabled="true"
                :max-auto-break-count="2"
            /> <!-- or DxArgumentAxis -->
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxValueAxis
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxValueAxis
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ValueAxis
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis
                        autoBreaksEnabled={true}
                        maxAutoBreakCount={2}
                    /> {/* or ArgumentAxis */}
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Strips](/concepts/05%20Widgets/Chart/60%20Strips.md '/Documentation/Guide/UI_Components/Chart/Strips/')
- [Constant Lines](/concepts/05%20Widgets/Chart/65%20Constant%20Lines.md '/Documentation/Guide/UI_Components/Chart/Constant_Lines/')
