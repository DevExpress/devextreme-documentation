A grid is a set of mutually-crossing vertical and horizontal lines that stretch throughout the entire chart. Visually, grid lines can be considered extensions of [major ticks](/concepts/05%20Widgets/Chart/20%20Axes/07%20Axis%20Ticks.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Ticks/'). The grid improves the readability of chart data.

![DevExtreme HTML5 JavaScript Charts GridLines](/images/ChartJS/visual_elements/grid_lines.png)

Grid lines can be configured using one of the following objects.

- **argumentAxis**.[grid](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/grid/')     
Settings for the grid lines that ascend from the argument axis.

- **valueAxis**.[grid](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/grid/')         
Settings for the grid lines that ascend from the value axis.

- **commonAxisSettings**.[grid](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/grid/')         
Settings for all grid lines in the Chart.

Note that axis-specific settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                grid: {
                    // high priority
                }
            },
            valueAxis: {
                grid: {
                    // high priority
                }
            },
            commonAxisSettings: {
                grid: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis>
            <dxo-grid>
                <!-- high priority -->
            </dxo-grid>
        </dxo-argument-axis>
        <dxi-value-axis>
            <dxo-grid>
                <!-- high priority -->
            </dxo-grid>
        </dxi-value-axis>
        <dxo-common-axis-settings>
            <dxo-grid>
                <!-- low priority -->
            </dxo-grid>
        </dxo-common-axis-settings>
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
            <DxArgumentAxis>
                <DxGrid>
                    <!-- high priority -->
                </DxGrid>
            </DxArgumentAxis>
            <DxValueAxis>
                <DxGrid>
                    <!-- high priority -->
                </DxGrid>
            </DxValueAxis>
            <DxCommonAxisSettings>
                <DxGrid>
                    <!-- low priority -->
                </DxGrid>
            </DxCommonAxisSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxGrid,
        DxArgumentAxis,
        DxValueAxis,
        DxCommonAxisSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxGrid,
            DxArgumentAxis,
            DxValueAxis,
            DxCommonAxisSettings
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Grid,
        ArgumentAxis,
        ValueAxis,
        CommonAxisSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis>
                        <Grid>
                            <!-- high priority -->
                        </Grid>
                    </ArgumentAxis>
                    <ValueAxis>
                        <Grid>
                            <!-- high priority -->
                        </Grid>
                    </ValueAxis>
                    <CommonAxisSettings>
                        <Grid>
                            <!-- low priority -->
                        </Grid>
                    </CommonAxisSettings>
                </Chart>
            );
        }
    }

    export default App;

---

[tags]chart, grid, minor grid, grid lines