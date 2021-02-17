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
        <dxo-common-series-settings>
            <!-- Enables data aggregation for all series in the Chart -->
            <dxo-aggregation
                [enabled]="true">
            </dxo-aggregation>

            <dxo-fullstackedbar>
                <!-- Enables data aggregation for all Full-Stacked Bar series -->
                <dxo-aggregation
                    [enabled]="true">
                </dxo-aggregation>
            </dxo-fullstackedbar>

        </dxo-common-series-settings>

        <dxi-series>
            <!-- Enables data aggregation for an individual series -->
            <dxo-aggregation
                [enabled]="true">
            </dxo-aggregation>
        </dxi-series>
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
