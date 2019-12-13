The **Chart** provides the [customizePoint](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/customizePoint.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizePoint') and [customizeLabel](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/customizeLabel.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#customizeLabel') functions specifically for changing individual point and label options. Any other widget options can be changed in the **Chart**'s **onPointClick** event handler, but remember to change them back in the **Button**'s **onClick** event handler.

---
##### jQuery

    <!--JavaScript-->
    // ...
    $(function() {
        var isFirstLevel = true;
        var originalTitle = "The Most Populated Countries by Continents";
        var chart = $("#chartContainer").dxChart({
            // ...
            title: originalTitle,
            onPointClick: function (e) {
                if (isFirstLevel) {
                    // ...
                    chart.option({
                        title: "The Most Populated Countries in " + e.target.originalArgument
                    });
                }
            }
        }).dxChart("instance");

        var backButton = $("#backButton").dxButton({
            // ...
            onClick: function (e) {
                if (!isFirstLevel) {
                    // ...
                    chart.option({
                        title: originalTitle
                    });
                }
            }
        }).dxButton("instance");
    });

##### Angular

    <!--HTML-->
    <dx-chart ...
        (onPointClick)="onPointClick($event)"
        [title]="currentTitle">
    </dx-chart>
    <dx-button ...
        (onClick)="onButtonClick()">
    </dx-button>

    <!--TypeScript-->
    // ...
    export class AppComponent {
        currentTitle: string = "The Most Populated Countries by Continents"
        // ...
        onPointClick(e) {
            if (this.isFirstLevel) {
                // ...
                this.currentTitle = "The Most Populated Countries in " + e.target.originalArgument;
            }
        }
        onButtonClick() {
            if (!this.isFirstLevel) {
                // ...
                this.currentTitle = "The Most Populated Countries by Continents"
            }
        }
    }

---

This article outlined the steps to implement a drill-down chart and provided code examples for each step. For the full code, refer to the **Drill-Down Chart** demo.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ChartsDrillDown/"
}
