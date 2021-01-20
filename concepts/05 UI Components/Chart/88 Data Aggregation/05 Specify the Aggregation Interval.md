Series points are grouped for aggregation using intervals: those points that fall within the same interval on the argument axis get aggregated together. You can specify the length of the intervals in axis units (numbers or dates), in pixels, or aggregate points by categories:

- **Axis units** (for continuous and logarithmic [axes](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/') only)       
Use the **argumentAxis**.[aggregationInterval](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/') option. 

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every 100 units
                    aggregationInterval: 100,
                    // A new interval every day
                    aggregationInterval: "day",
                    // A new interval every five days
                    aggregationInterval: { days: 5 }
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregationInterval]="100"  <!-- A new interval every 100 units -->
                aggregationInterval="day"> <!-- A new interval every day -->
                <dxo-aggregation-interval
                    [days]="5">            <!-- A new interval every five days -->
                </dxo-aggregation-interval>
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
                    :aggregation-interval="100" <!-- A new interval every 100 units -->
                    aggregation-interval="day">  <!-- A new interval every day -->
                    <DxAggregationInterval :days="5"/> <!-- A new interval every five days -->
                </DxArgumentAxis>
            </DxChart>
        </template>

        <script>
        import DxChart, {
            DxArgumentAxis,
            DxAggregationInterval
        } from 'devextreme-vue/chart';

        export default {
            components: {
                DxChart,
                DxArgumentAxis,
                DxAggregationInterval
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import Chart, {
            ArgumentAxis,
            AggregationInterval
        } from 'devextreme-react/chart';

        class App extends React.Component {
            render() {
                return (
                    <Chart ... >
                        <ArgumentAxis
                            aggregationInterval={100} {/* A new interval every 100 units */}
                            aggregationInterval="day">  {/* A new interval every day */}
                            <AggregationInterval days={5} /> {/* A new interval every five days */}
                        </ArgumentAxis>
                    </Chart>
                );
            }
        }

        export default App;

    ---

- **Pixels**            
Use the **argumentAxis**.[aggregationGroupWidth](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth') option.

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every 100 pixels
                    aggregationGroupWidth: 100
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregationGroupWidth]="100"> <!-- A new interval every 100 pixels -->
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
                <DxArgumentAxis :aggregation-group-width="100"/> <!-- A new interval every 100 pixels -->
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
            render() {
                return (
                    <Chart ... >
                        <ArgumentAxis aggregationGroupWidth={100} /> {/* A new interval every 100 pixels */}
                    </Chart>
                );
            }
        }

        export default App;

    ---

- **Categories**        
Aggregation by categories can be applied only when the axis displays [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#categories'), and each category contains two or more points. To apply it, set **argumentAxis**.[aggregateByCategory](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/aggregateByCategory.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregateByCategory') to **true**:

    ---
    ##### jQuery

        <!--JavaScript-->$(function() {
            $("#chartContainer").dxChart({
                // ...
                argumentAxis: {
                    aggregateByCategory: true
                }
            });
        });

    ##### Angular

        <!--HTML--><dx-chart ... >
            <dxo-argument-axis
                [aggregateByCategory]="true">
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
                <DxArgumentAxis :aggregate-by-category="true"/>
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
            render() {
                return (
                    <Chart ... >
                        <ArgumentAxis aggregateByCategory={true} />
                    </Chart>
                );
            }
        }

        export default App;

    ---