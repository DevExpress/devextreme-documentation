The **PieChart** provides two options that control the layout algorithm, allowing you to rotate the pie. The first is [startAngle](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/startAngle.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#startAngle') that specifies the angle at which to lay out the first pie slice and has a value of zero degrees by default. Decreasing this value rotates the pie clockwise; increasing it does the opposite. The second option is [segmentsDirection](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/segmentsDirection.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#segmentsDirection') that specifies the direction - clockwise or anticlockwise - in which the slices are laid out.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            startAngle: 45,
            segmentsDirection: "anticlockwise" // or "clockwise"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        [startAngle]="45"
        segmentsDirection="anticlockwise"> <!-- or "clockwise" -->
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

You can try both these options on the **PieChart** below.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/PieChartRotate/rotatePie.html, /Content/Applications/19_2/DataVisualization/Guides/PieChartRotate/rotatePie.js, /Content/Applications/19_2/DataVisualization/Guides/PieChartRotate/rotatePie.css"></div>

#####See Also#####
- [PieChart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie)
