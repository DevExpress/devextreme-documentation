The **PieChart** provides an API for showing and hiding a series point at runtime. This API is commonly used to show or hide a series point when a user clicks the [chart legend](/concepts/05%20Widgets/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Legend/Overview/'). You need to handle the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick') event as shown below to implement this scenario. The **isVisible()**, **hide()** and **show()** are [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object methods. 

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
            let points = e.points;
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

---
