The selection capability is not provided out of the box, but it can be implemented using the [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#pointClick') event. The following code gives an example of a scenario when clicking on a point selects it, and clicking on it again clears the selection. Call a point's [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isSelected') method to check whether it is selected.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
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
                const point = e.target;
                if(point.isSelected()) {
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
        const point = e.target;
        if(point.isSelected()) {
            point.clearSelection();
        } else {
            point.select();
        }
    }

---

In the previous code example, a specific point's selection was cleared. Call a series' [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#clearSelection') method if you need to clear all the selected points in that series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart
        (onPointClick)="onPointClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointClick (e) {
            const series = e.target.series;
            if (series.isSelected()) {
                series.clearSelection();
            } else {
                series.select();
            }
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
                const series = e.target.series;
                if(series.isSelected()) {
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
        const series = e.target.series;
        if(series.isSelected()) {
            series.clearSelection();
        } else {
            series.select();
        }
    }

---

In a multi-series PieChart, you can clear the entire selection at once by calling the PieChart instance's [clearSelection()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#clearSelection') method.

---
##### jQuery

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("clearSelection");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        clearSelection() {
            this.pieChart.instance.clearSelection();
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
        methods: {
            clearSelection() {
                this.$refs.pieChart.instance.clearSelection();
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

            this.clearSelection = () => {
                this.pieChart.clearSelection();
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

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Point Using the API](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/PieChart/Series/Access_a_Point_Using_the_API/')
