The Chart exposes the following methods for accessing a series. All of them return one or several objects whose fields and methods are described in the [Series](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/') section of the API reference.

- [getAllSeries()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#getAllSeries')        
Gets all series of the Chart.

    ---
    ##### jQuery

        <!--JavaScript-->var seriesCollection = $("#chartContainer").dxChart("getAllSeries");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            getAllSeries() {
                return this.chart.instance.getAllSeries();
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
                getAllSeries () {
                    return this.$refs.chart.instance.getAllSeries();
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
            getAllSeries () {
                return this.chart.getAllSeries();
            }
        }

        export default App;

    ---

- [getSeriesByName(seriesName)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#getSeriesByNameseriesName')       
Gets a series by its [name](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#name').

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByName", "Series 1");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            getSeriesByName(seriesName) {
                return this.chart.instance.getSeriesByName(seriesName);
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
                getSeriesByName (seriesName) {
                    return this.$refs.chart.instance.getSeriesByName(seriesName);
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
            getSeriesByName (seriesName) {
                return this.chart.getSeriesByName(seriesName);
            }
        }

        export default App;

    ---

- [getSeriesByPos(seriesIndex)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#getSeriesByPosseriesIndex')       
Gets a series by its index in the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#chartContainer").dxChart("getSeriesByPos", 0);

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxChartModule, DxChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxChartComponent) chart: DxChartComponent;
            getSeriesByPos(seriesIndex) {
                return this.chart.instance.getSeriesByPos(seriesIndex);
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
                getSeriesByPos(seriesIndex) {
                    return this.$refs.chart.instance.getSeriesByPos(seriesIndex);
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
            getSeriesByPos(seriesIndex) {
                return this.chart.getSeriesByPos(seriesIndex);
            }
        }

        export default App;

    ---

Apart from the API methods, you can access a series in the event handlers. For example, the [onSeriesClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesClick') event handler gets the clicked series in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesClick: function (e) {
                var series = e.target;
                // ...
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
            let series = e.target;
            // ...
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
        <DxChart @series-click="onSeriesClick">
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
                // ...
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
                <Chart onSeriesClick={onSeriesClick}>
                </Chart>
            );
        }
    }

    function onSeriesClick (e) {
        const series = e.target;
        // ...
    }

    export default App;

---

Once you get the series, you can access its child points. For further information, refer to the [Access a Series Point Using the API](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Access_a_Series_Point_Using_the_API/') topic.

#####See Also#####
- [Show and Hide a Series](/concepts/05%20UI%20Components/Chart/10%20Series/50%20Show%20and%20Hide%20a%20Series.md '/Documentation/Guide/UI_Components/Chart/Series/Show_and_Hide_a_Series/')
#include common-link-callmethods

[tags]chart, series, get series, getAllSeries, get series by name, getSeriesByName, get series by index, getSeriesByPos