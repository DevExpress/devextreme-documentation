The PieChart provides an API for showing and hiding a series point at runtime. This API is commonly used to show or hide a series point when a user clicks the [chart legend](/concepts/05%20UI%20Components/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Legend/Overview/'). You need to handle the [legendClick](/api-reference/10%20UI%20Components/dxPieChart/4%20Events/legendClick.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#legendClick') event as shown below to implement this scenario. The **isVisible()**, **hide()** and **show()** are [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') object methods. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            onLegendClick: function (e) {
                var points = e.points;
                // for a single-series PieChart
                points[0].isVisible() ? points[0].hide() : points[0].show();

                /* for a multi-series PieChart
                points.forEach(function (point) {
                    point.isVisible() ? point.hide() : point.show();
                });
                */
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onLegendClick)="onLegendClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onLegendClick (e) {
            const points = e.points;
            // for a single-series PieChart
            points[0].isVisible() ? points[0].hide() : points[0].show();

            /* for a multi-series PieChart
            points.forEach(function (point) {
                point.isVisible() ? point.hide() : point.show();
            });
            */
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
            @legend-click="onLegendClick">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            onLegendClick(e) {
                const points = e.points;
                // for a single-series PieChart
                points[0].isVisible() ? points[0].hide() : points[0].show();

                /* for a multi-series PieChart
                points.forEach(point => point.isVisible() ? point.hide() : point.show());
                */
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
                    onLegendClick={onLegendClick}>
                </PieChart>
            );
        }
    }

    function onLegendClick(e) {
        const points = e.points;
        // for a single-series PieChart
        points[0].isVisible() ? points[0].hide() : points[0].show();

        /* for a multi-series PieChart
        points.forEach(point => point.isVisible() ? point.hide() : point.show());
        */
    }

---
