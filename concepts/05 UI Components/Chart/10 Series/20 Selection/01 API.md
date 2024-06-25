The selection capability is not provided out of the box, but it can be implemented using the [seriesClick](/api-reference/10%20UI%20Components/dxChart/4%20Events/seriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#seriesClick') event. The following code gives an example for the scenario when a click on a series selects it, and a subsequent click on the same series clears the selection. To check whether the series is already selected, its [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isSelected') method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesClick)="onSeriesClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSeriesClick (e) {
            const series = e.target;
            if (series.isSelected()) {
                series.clearSelection();
            } else {
                series.select();
            }
        }
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
            @series-click="onSeriesClick"
        >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            onSeriesClick (e) {
               const series = e.target;
               if (series.isSelected()) {
                   series.clearSelection();
               } else {
                   series.select();
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
                    onSeriesClick={onSeriesClick}
                >
                </Chart>
            );
        }
    }

    function onSeriesClick (e) {
        const series = e.target;
        if (series.isSelected()) {
            series.clearSelection();
        } else {
            series.select();
        }
    }

    export default App;

---

There are series that consist of points only, for example, [bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/') or [financial](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Financial_Series/') series. For these series, subscribe to the [pointClick](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointClick') event instead of **seriesClick**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var series = e.target.series;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointClick)="onPointClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            const series = e.target.series;
            if (series.isSelected()) {
                series.clearSelection();
            } else {
                series.select();
            }
        }
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
            @point-click="onPointClick"
        >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            onPointClick (e) {
                const series = e.target.series;
                if (series.isSelected()) {
                    series.clearSelection();
                } else {
                    series.select();
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
                    onPointClick={onPointClick}
                >
                </Chart>
            );
        }
    }

    function onPointClick (e) {
        const series = e.target.series;
        if (series.isSelected()) {
            series.clearSelection();
        } else {
            series.select();
        }
    }

    export default App;

---

In the previous code examples, selection was cleared of a specific series. If you need to clear selection of all series, call the [clearSelection()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#clearSelection') method in the Chart instance.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        clearSelection() {
            this.chart.instance.clearSelection();
        }
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
           <DxChart ref="chart">
           </DxChart>
       </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            clearSelection () {
                return this.$refs.chart.instance.clearSelection();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartRef = React.createRef();
        }
        render() {
            return (
                <Chart ref={this.chartRef}></Chart>
            );
        }
        get chart() {
            return this.chartRef.current.instance();
        }
        clearSelection () {
            return this.chart.clearSelection();
        }
    }

    export default App;

---

#####See Also#####
- [Access a Series Using the API](/concepts/05%20UI%20Components/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series/Access_a_Series_Using_the_API/')
#include common-link-handleevents
#include common-link-callmethods
- [Point Selection Using the API](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/20%20Selection/01%20API.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Selection/#API')
