Regulating the empty space on a bar's sides controls the relative bar width. Use the [barPadding](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/barPadding.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#barPadding') option to specify how much of the available sector should be empty. For example, a **barPadding** of 0.1 leaves 10% of the available space empty giving the rest to the bar.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                // ...
                barPadding: 0.1 // for an individual series
            }, {
                // ...
            }],
            commonSeriesSettings: {
                // ...
                barPadding: 0.1 // for all series in the chart
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            [barPadding]="0.1"> <!-- for an individual series -->
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings
            [barPadding]="0.1"> <!-- for all series in the chart -->
        </dxo-common-series-settings>
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
            <DxSeries :bar-padding="0.1"/> <!-- for an individual series -->
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings :bar-padding="0.1"/> <!-- for all series in the chart -->
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series barPadding={0.1} /> {/* for an individual series */}
                    <Series ... />
                    ...
                    <CommonSeriesSettings barPadding={0.1}/> {/* for all series in the chart */}
                </Chart>
            );
        }
    }

    export default App;

---

In single-series charts, the available space equals the interval between two [major ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/'). In multi-series charts, it depends on the number of [bars in the parent group](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width') and the group's width.

The parent group's width can be specified using the [barGroupPadding](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/barGroupPadding.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#barGroupPadding') option. It works like **barPadding**, dividing the available space between the bar group and an empty space. For example, a **barGroupPadding** of 0.2 leaves 20% of the available space empty. The available space is the interval between two major ticks. Unlike **barPadding**, which can be specified for each series individually, **barGroupPadding** applies to the whole chart.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            // ...
            barGroupPadding: 0.2
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ...
        [barGroupPadding]="0.2">
        <!-- ... -->
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
        <DxChart ...
            :bar-group-padding="0.2">
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    barGroupPadding={0.2}>
                </Chart>
            );
        }
    }

    export default App;

---

The following images illustrate how different **barPadding** and **barGroupPadding** values change a chart's appearance. In this example, all series have the same **barPadding**.

<table class="dx-table">
    <tr>
        <th>Settings</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>barGroupPadding: 0 <br/> barPadding: 0</td>
        <td><img src="/Content/images/doc/20_2/ChartJS/barwidth/1.png" /></td>
    </tr>
    <tr>
        <td>barGroupPadding: 0.2 <br/> barPadding: 0</td>
        <td><img src="/Content/images/doc/20_2/ChartJS/barwidth/2.png" /></td>
    </tr>
    <tr>
        <td>barGroupPadding: 0.2 <br/> barPadding: 0.1</td>
        <td><img src="/Content/images/doc/20_2/ChartJS/barwidth/3.png" /></td>
    </tr>
</table>