The selection capability is not provided out of the box, but it can be implemented using the [pointClick](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointClick') event. The following code gives an example for the scenario when a click on a point selects it, and a subsequent click on the same point clears the selection. To check whether the point is already selected, its [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isSelected') method is called.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                var point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
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
            const point = e.target;
            if (point.isSelected()) {
                point.clearSelection();
            } else {
                point.select();
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
            @point-click="onPointClick($event)"
            ...
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
                const point = e.target;
                if (point.isSelected()) {
                    point.clearSelection();
                } else {
                    point.select();
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
                    onPointClick={this.onPointClick}
                    ...
                >
                </Chart>
            );
        }

        onPointClick (e) {
            const point = e.target;
            if (point.isSelected()) {
                point.clearSelection();
            } else {
                point.select();
            }
        }
    }

    export default App;

---

In the previous code example, selection was cleared of a specific point. If you need to clear selection of all points in a series, you can use the [deselectPoint(point)](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/deselectPoint(point).md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#deselectPointpoint') method of that series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointClick: function (e) {
                e.target.series.getAllPoints(function(point) {
                    series.deselectPoint(point);
                });
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
            e.target.series.getAllPoints(point => series.deselectPoint(point));
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
            @point-click="onPointClick($event)"
            ...
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
                e.target.series.getAllPoints(point => series.deselectPoint(point));
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
                    onPointClick={this.onPointClick}
                    ...
                >
                </Chart>
            );
        }

        onPointClick (e) {
            e.target.series.getAllPoints(point => series.deselectPoint(point));
        }
    }

    export default App;

---

If you need to clear selection of all series in the Chart along with their points, call the [clearSelection()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#clearSelection') method of the Chart instance.

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
        <DxChart
            ref="chart"
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
            clearSelection () {
                this.$refs.chart.instance.clearSelection();
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
                <Chart ref={this.chartRef} ... >
                </Chart>
            );
        }

        clearSelection () {
            this.chartRef.current.instance().clearSelection();
        }
    }

    export default App;

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Series Point Using the API](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Access_a_Series_Point_Using_the_API/')
- [Access a Series Using the API](/concepts/05%20UI%20Components/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series/Access_a_Series_Using_the_API/')
- [Series Selection Using the API](/concepts/05%20UI%20Components/Chart/10%20Series/20%20Selection/01%20API.md '/Documentation/Guide/UI_Components/Chart/Series/Selection/#API')
