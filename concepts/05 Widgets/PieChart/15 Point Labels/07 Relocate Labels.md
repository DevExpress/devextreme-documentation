Labels are located beside their series points by default. Change the **series**.**label**.[position](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/5%20Series%20Types/CommonPieChartSeries/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/label/#position') option to rearrange labels in columns or place them inside series points.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            series: {
                label: {
                    position: "columns" // or "inside" | "outside"
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart ... >
        <dxi-series>
            <dxo-label
                position="columns"> <!-- or "inside" | "outside" -->
            </dxo-label>
        </dxi-series>
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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithCustomLabels/"
}

#####See Also#####
- [Resolve Label Overlapping](/concepts/05%20Widgets/PieChart/15%20Point%20Labels/10%20Resolve%20Overlapping.md '/Documentation/Guide/Widgets/PieChart/Point_Labels/Resolve_Overlapping/')