When implementing a custom aggregate function, use the [aggregationInfo](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Point/2%20Fields/aggregationInfo '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/Fields/aggregationInfo/') object that is passed to it as the first argument. This object contains information on the aggregation interval for which the function is called and the data objects that fall within this interval. In addition, you can access the [Series](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/') object, which is passed to the function as the second argument.

To apply the function, assign it to the series' **aggregation**.[calculate](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/calculate.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#calculate') property and set the **aggregation**.[method](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/aggregation/#method') property to *"custom"*.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PointsAggregation/"
}

In the following code, a custom aggregation function implements the <a href="http://en.wikipedia.org/wiki/Median_filter" target="_blank">median filter</a> algorithm:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            dataSource: [
                { argument: 1, value: 10 },
                // ...
            ],
            series: [{
                argumentField: "argument",
                valueField: "value",
                aggregation: {
                    enabled: true,
                    method: "custom",
                    calculate: function (aggregationInfo) {
                        if (aggregationInfo.data.length) {
                            return {
                                argument: aggregationInfo.intervalStart,
                                value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
                            };
                        }
                    }
                    
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart [dataSource]="data">
        <dxi-series
            argumentField="argument"
            valueField="value">
            <dxo-aggregation
                [enabled]="true"
                method="custom"
                [calculate]="calcMedianFilter">
            </dxo-aggregation>
        </dxi-series>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        data = [
            { argument: 1, value: 10 },
            // ...
        ];
        calcMedianFilter (aggregationInfo) {
            if (aggregationInfo.data.length) {
                return {
                    argument: aggregationInfo.intervalStart,
                    value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
                };
            }
        };
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
            :data-source="data">
            <DxSeries
                argument-field="argument"
                value-field="value">
                <DxAggregation
                    :enabled="true"
                    :calculate="calcMedianFilter"
                    method="custom"
                />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxAggregation
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxAggregation
        },

        data() {
            return {
                data: [
                    { argument: 1, value: 10 },
                    // ...
                ]
            };
        },

        methods: {
            calcMedianFilter(aggregationInfo) {
                if(aggregationInfo.data.length) {
                    return {
                        argument: aggregationInfo.intervalStart,
                        value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
                    };
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        Aggregation
    } from 'devextreme-react/chart';

    const data = [
        { argument: 1, value: 10 },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    dataSource={data}>
                    <Series
                        argumentField="argument"
                        valueField="value">
                        <Aggregation
                            enabled={true}
                            calculate={calcMedianFilter}
                            method="custom"
                        />
                    </Series>
                </Chart>
            );
        }
    }

    function calcMedianFilter(aggregationInfo) {
        if(aggregationInfo.data.length) {
            return {
                argument: aggregationInfo.intervalStart,
                value: aggregationInfo.data[Math.floor(aggregationInfo.data.length / 2)].value
            };
        }
    }

    export default App;

---

