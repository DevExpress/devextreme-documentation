To zoom a standalone Chart initially, specify the axis' [visualRange](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/visualRange '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/').

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            argumentAxis: {
                visualRange: [0, 10]
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [visualRange]="[0, 10]">
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
            <DxArgumentAxis :visual-range="chart_visualRange"/>
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
        },
        data() {
            return {
                chart_visualRange: [0, 10]
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

    const chart_visualRange = [0, 10];

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis visualRange={chart_visualRange} />
                </Chart>
            );
        }
    }

    export default App;

---

For more information about visual and whole ranges, refer to the following article: [Visual and Whole Ranges](/concepts/05%20UI%20Components/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/').

If the Chart is [bound to the RangeSelector](/concepts/05%20UI%20Components/Chart/95%20Zooming%20and%20Panning/10%20Using%20the%20RangeSelector%20Component.md '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/#Using_the_RangeSelector_Component'), specify the Chart's initial zoom factor by setting the RangeSelector's [value](/api-reference/10%20UI%20Components/dxRangeSelector/1%20Configuration/value '/Documentation/ApiReference/UI_Components/dxRangeSelector/Configuration/#value') property. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            value: [0, 10]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis
            [(visualRange)]="chart_visualRange">
        </dxo-argument-axis>
    </dx-chart>
    <dx-range-selector ...
        [(value)]="chart_visualRange">
    </dx-range-selector>

    <!--TypeScript-->
    import { DxChartModule, DxRangeSelectorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        chart_visualRange = [0, 10];
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
            <DxArgumentAxis :visual-range="chart_visualRange"/>
        </DxChart>
        <DxRangeSelector ...
            v-model:value="chart_visualRange">
        </DxRangeSelector>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis
    } from 'devextreme-vue/chart';
    import DxRangeSelector from 'devextreme-vue/range-selector';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxRangeSelector
        },
        data() {
            return {
                chart_visualRange: [0, 10]
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
    import RangeSelector from 'devextreme-react/range-selector';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { chart_visualRange: [0, 10] };
            this.updateChartVisualRange = () => this.setState({ chart_visualRange: e.value });
        }

        render() {
            return (
                <Chart ... >
                    <ArgumentAxis visualRange={this.state.chart_visualRange} />
                </Chart>
                <RangeSelector ...
                    onValueChanged={this.updateChartVisualRange}>
                </RangeSelector>
            );
        }
    }

    export default App;

---
