Before accessing a series point, gain access to its series by calling the [getAllSeries()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getAllSeries().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getAllSeries') method. You can call the [getSeriesByName(seriesName)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByName(seriesName).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getSeriesByNameseriesName')  or [getSeriesByPos(seriesIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/getSeriesByPos(seriesIndex).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#getSeriesByPosseriesIndex') method as an alternative for multi-series **PieCharts**.

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
        <DxPieChart ...
            ref="pieChart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        data() {
            return {
                series: []
            };
        },
        methods: {
            getSeries() {
                this.series = this.$refs.pieChart.instance.getAllSeries()[0];
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

            this.pieChartRef = React.createRef();
            this.series = [];

            this.getSeries = () => {
                this.series = this.pieChart.getAllSeries()[0];
            };
        }

        render() {
            return (
                <PieChart ...
                    ref={this.pieChartRef}>
                </PieChart>
            );
        }

        get pieChart() {
            return this.pieChartRef.current.instance;
        }
    }

---

Use the following methods to access series points. All of them return one or several objects whose fields and methods are described in the API reference's [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') section.

- [getAllPoints()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getAllPoints().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getAllPoints')        
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
                const series = this.pieChart.instance.getAllSeries()[0];
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
            <DxPieChart ...
                ref="pieChart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            data() {
                return {
                    seriesPoints: []
                };
            },
            methods: {
                getSeriesPoints() {
                    const series = this.$refs.pieChart.instance.getAllSeries()[0];
                    this.seriesPoints = series.getAllPoints();
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

                this.pieChartRef = React.createRef();
                this.seriesPoints = [];

                this.getSeriesPoints = this.getSeriesPoints.bind(this);
            }

            render() {
                return (
                    <PieChart ...
                        ref={this.pieChartRef}>
                    </PieChart>
                );
            }

            get pieChart() {
                return this.pieChartRef.current.instance;
            }

            getSeriesPoints() {
                const series = this.pieChart.getAllSeries()[0];
                this.seriesPoints = series.getAllPoints();
            }
        }

    ---

- [getPointsByArg(pointArg)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointsByArg(pointArg).md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getPointsByArgpointArg')      
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
            chinaPoints: any = [];
            getChinaPoints() {
                const series = this.pieChart.instance.getAllSeries()[0];
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
            <DxPieChart ...
                ref="pieChart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            data() {
                return {
                    chinaPoints: []
                };
            },
            methods: {
                getChinaPoints() {
                    const series = this.$refs.pieChart.instance.getAllSeries()[0];
                    this.chinaPoints = series.getPointsByArg("China");
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

                this.pieChartRef = React.createRef();
                this.chinaPoints = [];

                this.getChinaPoints = this.getChinaPoints.bind(this);
            }

            render() {
                return (
                    <PieChart ...
                        ref={this.pieChartRef}>
                    </PieChart>
                );
            }

            get pieChart() {
                return this.pieChartRef.current.instance;
            }

            getChinaPoints() {
                const series = this.pieChart.getAllSeries()[0];
                this.chinaPoints = series.getPointsByArg("China");
            }
        }

    ---

- [getPointByPos(positionIndex)](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/getPointByPos(positionIndex).md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getPointByPospositionIndex')          
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
                const series = this.pieChart.instance.getAllSeries()[0];
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
            <DxPieChart ...
                ref="pieChart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            data() {
                return {
                    firstPoint: {}
                };
            },
            methods: {
                getFirstPoint() {
                    const series = this.$refs.pieChart.instance.getAllSeries()[0];
                    this.firstPoint = series.getPointByPos(0);
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

                this.pieChartRef = React.createRef();
                this.firstPoint = {};

                this.getFirstPoint = this.getFirstPoint.bind(this);
            }

            render() {
                return (
                    <PieChart ...
                        ref={this.pieChartRef}>
                    </PieChart>
                );
            }

            get pieChart() {
                return this.pieChartRef.current.instance;
            }

            getFirstPoint() {
                const series = this.pieChart.getAllSeries()[0];
                this.firstPoint = series.getPointByPos(0);
            }
        }

    ---

- [getVisiblePoints()](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Series/3%20Methods/getVisiblePoints().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#getVisiblePoints')          
Gets only [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point/3%20Methods/isVisible().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isVisible') series points.

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
                const series = this.pieChart.instance.getAllSeries()[0];
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
            <DxPieChart ...
                ref="pieChart">
            </DxPieChart>
        </template>

        <script>
        import DxPieChart from 'devextreme-vue/pie-chart';

        export default {
            components: {
                DxPieChart
            },
            data() {
                return {
                    visiblePoints: []
                };
            },
            methods: {
                getVisiblePoints() {
                    const series = this.$refs.pieChart.instance.getAllSeries()[0];
                    this.visiblePoints = series.getVisiblePoints();
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

                this.pieChartRef = React.createRef();
                this.visiblePoints = [];

                this.getVisiblePoints = this.getVisiblePoints.bind(this);
            }

            render() {
                return (
                    <PieChart ...
                        ref={this.pieChartRef}>
                    </PieChart>
                );
            }

            get pieChart() {
                return this.pieChartRef.current.instance;
            }

            getVisiblePoints() {
                const series = this.pieChart.getAllSeries()[0];
                this.visiblePoints = series.getVisiblePoints();
            }
        }

    ---

Apart from the API methods, you can access a series point in the event handlers. For example, the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointClick') event handler gets the clicked series point in the argument.

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
        <DxPieChart ...
            @point-click="onPointClick">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            onPointClick(e) {
                let point = e.target;
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
                <PieChart ...
                    onPointClick={onPointClick}>
                </PieChart>
            );
        }
    }

    function onPointClick(e) {
        let point = e.target;
        // ...
    }

---

[note] Each [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') object contains a reference to its parent series in the [series](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/2%20Fields/series.md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Fields/#series') field.

#####See Also#####
- [Access a Point Label Using the API](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/15%20Access%20a%20Label%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Access_a_Label_Using_the_API/')
#include common-link-callmethods
