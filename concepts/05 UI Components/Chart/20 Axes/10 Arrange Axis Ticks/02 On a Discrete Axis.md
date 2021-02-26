Values on a discrete axis are called ["categories"](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#categories'), and ticks on this axis separate one category from another. In terms of tick arrangement, you can only specify whether ticks (and consequently, [grid lines](/concepts/05%20Widgets/Chart/55%20Grid/00%20Grid.md '/Documentation/Guide/UI_Components/Chart/Grid/')) should be placed between [axis labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/') or should cross them. Use the [discreteAxisDivisionMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/discreteAxisDivisionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#discreteAxisDivisionMode') property for this purpose.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                tick: { visible: true },
                discreteAxisDivisionMode: 'crossLabels' // or 'betweenLabels'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            discreteAxisDivisionMode="crossLabels"> <!-- or 'betweenLabels' -->
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
                discrete-axis-division-mode="crossLabels"> <!-- or 'betweenLabels' -->
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
                        discreteAxisDivisionMode="crossLabels"> {/* or 'betweenLabels' */}
                        <Tick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---
