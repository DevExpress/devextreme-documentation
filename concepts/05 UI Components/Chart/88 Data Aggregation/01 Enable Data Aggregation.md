You can enable data aggregation for individual series, all series of a specific type, or for all series in the Chart. The following code demonstrates all the three cases:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                // Enables data aggregation for all series in the Chart
                aggregation: {
                    enabled: true
                },
                fullstackedbar: {
                    // Enables data aggregation for all Full-Stacked Bar series
                    aggregation: {
                        enabled: true
                    }
                }
            },
            series: [{
                // Enables data aggregation for an individual series
                aggregation: {
                    enabled: true
                }
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-chart-common-series-settings>
            <!-- Enables data aggregation for all series in the Chart -->
            <dxo-chart-aggregation
                [enabled]="true">
            </dxo-chart-aggregation>

            <dxo-fullstackedbar>
                <!-- Enables data aggregation for all Full-Stacked Bar series -->
                <dxo-chart-aggregation
                    [enabled]="true">
                </dxo-chart-aggregation>
            </dxo-fullstackedbar>

        </dxo-chart-common-series-settings>

        <dxi-chart-series>
            <!-- Enables data aggregation for an individual series -->
            <dxo-chart-aggregation
                [enabled]="true">
            </dxo-chart-aggregation>
        </dxi-chart-series>
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
            <DxCommonSeriesSettings ...
                :fullstackedbar="fullStackedBarSettings"> <!-- Enables data aggregation for all Full-Stacked Bar series -->
                <DxAggregation :enabled="true"/> <!-- Enables data aggregation for all series in the Chart -->
            </DxCommonSeriesSettings>
            <DxSeries>
                <DxAggregation :enabled="true"/> <!-- Enables data aggregation for an individual series -->
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxSeries,
        DxAggregation
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonSeriesSettings,
            DxSeries,
            DxAggregation
        },
        data() {
            return {
                fullStackedBarSettings: { aggregation: { enabled: true } }
            };
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        CommonSeriesSettings,
        Series,
        Aggregation
    } from 'devextreme-react/chart';

    const fullStackedBarSettings = { aggregation: { enabled: true } };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <CommonSeriesSettings ...
                        fullstackedbar={fullStackedBarSettings}> {/* Enables data aggregation for all Full-Stacked Bar series */}
                        <Aggregation enabled={true} /> {/* Enables data aggregation for all series in the Chart */}
                    </CommonSeriesSettings>
                    <Series>
                        <Aggregation enabled={true} /> {/* Enables data aggregation for an individual series */}
                    </Series>
                </Chart>
            );
        }
    }

    export default App;

---

[note] You can configure data aggregation to reduce the number of rendered component elements. This can improve Chart performance on large datasets. For more information on how to improve component performance, refer to the following topic: [Enhance Performance on Large Datasets](/concepts/05%20UI%20Components/Chart/93%20Enhance%20Performance%20on%20Large%20Datasets.md '/Documentation/Guide/UI_Components/Chart/Enhance_Performance_on_Large_Datasets/').