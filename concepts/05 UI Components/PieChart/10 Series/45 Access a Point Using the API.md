Before accessing a series point, gain access to its series by calling the [getAllSeries()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getAllSeries') method. You can call the [getSeriesByName(seriesName)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getSeriesByNameseriesName')  or [getSeriesByPos(seriesIndex)](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getSeriesByPosseriesIndex') method as an alternative for multi-series **PieCharts**.

---
##### jQuery

    <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        series: any = [];
        getSeries() {
            this.series = this.pieChart.instance.getAllSeries()[0];
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ref="chart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        computed: {
            series: function() {
                return this.$refs.chart.instance.getAllSeries()[0];
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartRef = React.createRef();
        }
        render() {
            return (
                <PieChart ref={this.chartRef}></PieChart>
            );
        }
        get chart() {
            return this.chartRef.current.instance();
        }
        getSeries () {
            return this.chart.getAllSeries()[0];
        }
    }

    export default App;

---

Use the following methods to access series points. All of them return one or several objects whose fields and methods are described in the API reference's [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') section.

- [getAllPoints()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getAllPoints().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getAllPoints')        
Gets all the series points.

    ---
    ##### jQuery

        <!--JavaScript-->var series = $("#pieChartContainer").dxPieChart("getAllSeries")[0];
        var seriesPoints = series.getAllPoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            seriesPoints: any = [];
            getSeriesPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.seriesPoints = series.getAllPoints();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ref="chart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            computed: {
                series: function () {
                    return this.$refs.chart.instance.getAllSeries()[0];
                },
                seriesPoints: function () {
                    return this.series.getAllPoints();
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart from 'devextreme-react/pie-chart';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.chartRef = React.createRef();
            }
            render() {
                return (
                    <PieChart ref={this.chartRef}></PieChart>
                );
            }
            get chart() {
                return this.chartRef.current.instance();
            }
            getSeries () {
                return this.chart.getAllSeries()[0];
            }
            getSeriesPoints () {
                return this.getSeries().getAllPoints();
            }
        }

        export default App;

    ---

- [getPointsByArg(pointArg)](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointsByArg(pointArg).md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg')      
Gets those series points that have a specific argument.

    ---
    ##### jQuery

        <!--JavaScript-->var chinaPoints = series.getPointsByArg("China");

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            chinaPoints: any = {};
            getChinaPoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.chinaPoints = series.getPointsByArg("China");
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ref="chart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            computed: {
                series: function () {
                    return this.$refs.chart.instance.getAllSeries()[0];
                },
                chinaPoints: function () {
                    return this.series.getPointsByArg("China");
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart from 'devextreme-react/pie-chart';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.chartRef = React.createRef();
            }
            render() {
                return (
                    <PieChart ref={this.chartRef}></PieChart>
                );
            }
            get chart() {
                return this.chartRef.current.instance();
            }
            getSeries () {
                return this.chart.getAllSeries()[0];
            }
            getChinaPoints () {
                return this.getSeries().getPointsByArg("China");
            }
        }

        export default App;

    ---

- [getPointByPos(positionIndex)](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointByPos(positionIndex).md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex')          
Gets a point using its index. The index is zero-based.

    ---
    ##### jQuery

        <!--JavaScript-->var firstPoint = series.getPointByPos(0);
    
    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            firstPoint: any = {};
            getFirstPoint() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.firstPoint = series.getPointByPos(0);
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ref="chart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            computed: {
                series: function () {
                    return this.$refs.chart.instance.getAllSeries()[0];
                },
                firstPoint: function () {
                    return this.series.getPointByPos(0);
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart from 'devextreme-react/pie-chart';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.chartRef = React.createRef();
            }
            render() {
                return (
                    <PieChart ref={this.chartRef}></PieChart>
                );
            }
            get chart() {
                return this.chartRef.current.instance();
            }
            getSeries () {
                return this.chart.getAllSeries()[0];
            }
            getFirstPoint () {
                return this.getSeries().getPointByPos(0);
            }
        }

        export default App;

    ---

- [getVisiblePoints()](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Series/3%20Methods/getVisiblePoints().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getVisiblePoints')          
Gets only [visible](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point/3%20Methods/isVisible().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isVisible') series points.

    ---
    ##### jQuery

        <!--JavaScript-->var visiblePoints = series.getVisiblePoints();

    ##### Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
            // Prior to Angular 8
            // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
            visiblePoints: any = [];
            getVisiblePoints() {
                let series = this.pieChart.instance.getAllSeries()[0];
                this.visiblePoints = series.getVisiblePoints();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxPieChartModule
            ],
            // ...
        })

    ##### Vue

        <!-- tab: App.vue -->
        <template> 
            <DxPieChart ref="chart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            computed: {
                series: function () {
                    return this.$refs.chart.instance.getAllSeries()[0];
                },
                visiblePoints: function () {
                    return this.series.getVisiblePoints();
                }
            }
        }
        </script>

    ##### React

        <!-- tab: App.js -->
        import React from 'react';
        import PieChart from 'devextreme-react/pie-chart';

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.chartRef = React.createRef();
            }
            render() {
                return (
                    <PieChart ref={this.chartRef}></PieChart>
                );
            }
            get chart() {
                return this.chartRef.current.instance();
            }
            getSeries () {
                return this.chart.getAllSeries()[0];
            }
            getVisiblePoints () {
                return this.getSeries().getVisiblePoints();
            }
        }

        export default App;

    ---

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/api-reference/10%20UI%20Components/dxPieChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointClick') event handler gets the clicked series point in the argument.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            let point = e.target;
            // ...
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart @point-click="onPointClick">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            onPointClick (e) {
                const point = e.target;
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart onPointClick={onPointClick}>
                </PieChart>
            );
        }
    }

    function onPointClick (e) {
        const point = e.target;
        // ...
    }

    export default App;

---

[note] Each [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') object contains a reference to its parent series in the [series](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/2%20Fields/series.md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Fields/#series') field.

#####See Also#####
- [Access a Point Label Using the API](/concepts/05%20UI%20Components/PieChart/15%20Point%20Labels/15%20Access%20a%20Label%20Using%20the%20API.md '/Documentation/Guide/UI_Components/PieChart/Point_Labels/Access_a_Label_Using_the_API/')
#include common-link-callmethods
