The legend can be moved inside the chart using the [position](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/legend/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#position') option, and also aligned in the horizontal or vertical direction using the [horizontalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#horizontalAlignment') or [verticalAlignment](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/verticalAlignment.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#verticalAlignment') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                position: "inside", // or "outside"
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend
            position="inside"
            horizontalAlignment="center"
            verticalAlignment="top">
        </dxo-legend>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

Below, you can try out these options in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/19_2/DataVisualization/Guides/Legend/relocateTheLegend.html, /Content/Applications/19_2/DataVisualization/Guides/Legend/relocateTheLegend.js, /Content/Applications/19_2/DataVisualization/Guides/Legend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/concepts/05%20Widgets/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/StepLine)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/')

[tags]chart, legend, position, horizontal alignment, horizontalAlignment, vertical alignment, verticalAlignment, move the legend
