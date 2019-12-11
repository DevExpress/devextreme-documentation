The **PieChart** widget comprises of a pie and other elements which can affect the pie's size. This means that pies in several side-by-side **PieCharts** may differ in size. Collect all these widgets in a single size group by setting their [sizeGroup](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/sizeGroup.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#sizeGroup') options to identical values to avoid this.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer1").dxPieChart({
            // ...
            sizeGroup: "pies"
        });

        $("#pieChartContainer2").dxPieChart({
            // ...
            sizeGroup: "pies"
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        id="pieChartContainer1"
        sizeGroup="pies">
    </dx-pie-chart>

    <dx-pie-chart ...
        id="pieChartContainer2"
        sizeGroup="pies">
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

The widgets should have identical layouts, that is, the same container size, [title](/concepts/05%20Widgets/PieChart/58%20Title%20and%20Subtitle.md '/Documentation/Guide/Widgets/PieChart/Title_and_Subtitle/') and [legend](/concepts/05%20Widgets/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Legend/Overview/') position, etc. Note also that a single page can contain many size groups, but a widget can be a member of only one of them.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PiesWithEqualSize/"
}
