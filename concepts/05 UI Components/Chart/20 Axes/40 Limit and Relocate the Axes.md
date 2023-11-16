---
tags: chart, min axis value, max axis value, axis margins, valueMarginsEnabled, minValueMargin, maxValueMargin, axis position, rotated chart
---
The visual range of arguments/values on an axis should include all arguments/values of all series. If you want to reduce the visual range, specify the axis's [visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                visualRange: [1950, 2000]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [visualRange]="[1950, 2000]">
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
                :visual-range="[1950, 2000]"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis
    } from 'devextreme-react/chart';

    class App extends React.Component {
        visualRange = [1950, 2000];

        render() {
            return (
                <Chart ... >
                    <ArgumentAxis
                        defaultVisualRange={this.visualRange}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Axes can be relocated to their opposite side using the [position](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/position.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#position') property. Note that available positions for each axis depend on whether the chart is [rotated](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/rotated.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#rotated') or not.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                position: 'top'
            },
            valueAxis: {
                position: 'right'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            position="top">
        </dxo-argument-axis>
        <dxi-value-axis
            position="right">
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
            <DxArgumentAxis position="top"/>
            <DxValueAxis position="right"/>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxValueAxis
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxValueAxis
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        ValueAxis
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis position="top" />
                    <ValueAxis position="right" />
                </Chart>
            );
        }
    }

    export default App;

---

![DevExtreme HTML5 JavaScript Charts ArgumentAxis ValueAxis](/images/ChartJS/visual_elements/axes_relocated.png)

#####See Also#####
- [Axis Titles](/concepts/05%20UI%20Components/Chart/20%20Axes/25%20Axis%20Titles.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Titles/')
- [Axis Labels](/concepts/05%20UI%20Components/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/')
- [Multi-Axis Chart](/concepts/05%20UI%20Components/Chart/20%20Axes/70%20Multi-Axis%20Chart.md '/Documentation/Guide/UI_Components/Chart/Axes/Multi-Axis_Chart/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')


