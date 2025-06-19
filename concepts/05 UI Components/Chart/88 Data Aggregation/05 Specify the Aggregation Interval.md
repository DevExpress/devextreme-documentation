Series points are grouped for aggregation using intervals: those points that fall within the same interval on the argument axis get aggregated together. You can specify the length of the intervals in axis units (numbers or dates) or pixels, or aggregate points by categories:

- **Axis units** (only for [axes](/concepts/05%20UI%20Components/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/') of continuous and logarithmic [types](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type'))    
Specify the **argumentAxis**.[aggregationInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/aggregationInterval/') property. 

    ---
    ##### jQuery

        <!--JavaScript-->
        $(function() {
            $("#unitInterval").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every 100 units
                    aggregationInterval: 100,
                }
            });
            $("#dayInterval").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every day
                    aggregationInterval: "day",
                }
            });
            $("#fiveDayInterval").dxChart({
                // ...
                argumentAxis: {
                    // A new interval every five days
                    aggregationInterval: { days: 5 }
                }
            });
        });

    ##### Angular

        <!--HTML-->
        <dx-chart>
            <!-- A new interval every 100 units -->
            <dxo-argument-axis ... [aggregationInterval]="100">
            </dxo-argument-axis>
        </dx-chart>
        <dx-chart>
            <!-- A new interval every day -->
            <dxo-argument-axis ... aggregationInterval="day">
            </dxo-argument-axis>
        </dx-chart>
        <dx-chart>
            <dxo-argument-axis ... >
                <!-- A new interval every five days -->
                <dxo-aggregation-interval [days]="5">
                </dxo-aggregation-interval>
            </dxo-argument-axis>
        </dx-chart>

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxChart ... >
                <!-- A new interval every 100 units -->
                <DxArgumentAxis ... :aggregation-interval="100">
                </DxArgumentAxis>
            </DxChart>
            <DxChart ... >
                <!-- A new interval every day -->
                <DxArgumentAxis ... aggregation-interval="day">
                </DxArgumentAxis>
            </DxChart>
            <DxChart ... >
                <DxArgumentAxis ... >
                    <!-- A new interval every five days -->
                    <DxAggregationInterval :days="5" />
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
                    <>
                        <Chart ... >
                            <!-- A new interval every 100 units -->
                            <ArgumentAxis ... aggregationInterval={100} >
                            </ArgumentAxis>
                        </Chart>
                        <Chart ... >
                            <!-- A new interval every day -->
                            <ArgumentAxis ... aggregationInterval="day">
                            </ArgumentAxis>
                        </Chart>
                        <Chart ... >
                            <ArgumentAxis ... >
                                <!-- A new interval every five days -->
                                <AggregationInterval days={5} />
                            </ArgumentAxis>
                        </Chart>
                    </>
                );
            }
        }

        export default App;

    ---

- **Pixels** (only for axes of continuous and logarithmic types)    
Specify the **argumentAxis**.[aggregationGroupWidth](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/aggregationGroupWidth.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#aggregationGroupWidth') property.

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

        <!--HTML-->
        <dx-chart ... >
            <!-- A new interval every 100 pixels -->
            <dxo-argument-axis ... [aggregationGroupWidth]="100">
            </dxo-argument-axis>
        </dx-chart>

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxChart ... >
                <!-- A new interval every 100 pixels -->
                <DxArgumentAxis ... :aggregation-group-width="100"/>
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
                        <!-- A new interval every 100 pixels -->
                        <ArgumentAxis ... aggregationGroupWidth={100} />
                    </Chart>
                );
            }
        }

        export default App;

    ---

- **Categories**    
You can enable aggregation by category only for discrete argument axes. Group data before assigning to the component's [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource) to aggregate it by category. You do not need to specify any additional properties to set up aggregation by category.