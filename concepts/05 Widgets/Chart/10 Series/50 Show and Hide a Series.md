The **Chart** provides an API for showing and hiding a series at runtime. The most common use-case for this API is to show or hide a series when a user clicks the [chart legend](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/'). To implement this scenario, you need to handle the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick') event in the following manner. The **isVisible()**, **hide()** and **show()** are methods of the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') object. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                var series = e.target;
                if (series.isVisible()) {
                    series.hide();
                } else {
                    series.show();
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onLegendClick)="legendClickHandler($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        legendClickHandler (e) {
            const series = e.target;
            if (series.isVisible()) {
                series.hide();
            } else {
                series.show();
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
        <DxChart
            @legend-click="legendClickHandler($event)"
            ... >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            legendClickHandler(e) {
                const series = e.target;
                if (series.isVisible()) {
                    series.hide();
                } else {
                    series.show();
                }
            }
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
                <Chart
                    onLegendClick={this.legendClickHandler}
                    ... >
                </Chart>
            );
        }

        legendClickHandler(e) {
            const series = e.target;
            if (series.isVisible()) {
                series.hide();
            } else {
                series.show();
            }
        }
    }

    export default App;

---

A series can be hidden initially. For this, assign **false** to the [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/visible.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#visible') property of the object that configures the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                visible: false
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series [visible]="false" ...></dxi-series>
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
            <DxSeries :visible="false" ... />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series visible={false} />
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, series, show series, hide series, series visibility 
