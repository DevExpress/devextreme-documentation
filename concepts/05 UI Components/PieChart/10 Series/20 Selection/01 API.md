The selection capability is not provided out of the box, but it can be implemented using the [pointClick](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#pointClick') event. The following code gives an example of a scenario when clicking on a point selects it, and clicking on it again clears the selection. Call a point's [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isSelected') method to check whether it is selected.

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
            let point = e.target;
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
            onPointClick({ target: point }) {
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
    import PieChart from 'devextreme-react/pie-chart';

    const onPointClick = ({ target: point }) => {
        if (point.isSelected()) {
            point.clearSelection();
        } else {
            point.select();
        }
    };

    const App = () => {
        return (
            <PieChart ...
                onPointClick={onPointClick}>
            </PieChart>
        );
    };

    export default App;

---

In the previous code example, a specific point's selection was cleared. Call a series' [clearSelection()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Series/Methods/#clearSelection') method if you need to clear all the selected points in that series.

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
            let series = e.target.series;
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
            onPointClick({ target: point }) {
                const series = point.series;
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
    import PieChart from 'devextreme-react/pie-chart';

    const onPointClick = ({ target: point }) => {
        const series = point.series;
        if (series.isSelected()) {
            series.clearSelection();
        } else {
            series.select();
        }
    };

    const App = () => {
        return (
            <PieChart ...
                onPointClick={onPointClick}>
            </PieChart>
        );
    };

    export default App;

---

In a multi-series PieChart, you can clear the entire selection at once by calling the PieChart instance's [clearSelection()](/api-reference/10%20UI%20Components/BaseChart/3%20Methods/clearSelection().md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#clearSelection') method.

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
        <DxPieChart ref="pieChart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },

        methods: {
            clearSelection () {
                return this.$refs.pieChart.instance.clearSelection();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    const pieChartRef = React.createRef();
    const clearSelection = () => {
        return pieChartRef.current.instance().clearSelection();
    };

    const App = () => {
        return (
            <PieChart ref={pieChartRef}>
            </PieChart>
        );
    }

    export default App;

---

#####See Also#####
#include common-link-handleevents
#include common-link-callmethods
- [Access a Point Using the API](/concepts/05%20UI%20Components/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/PieChart/Series/Access_a_Point_Using_the_API/')
