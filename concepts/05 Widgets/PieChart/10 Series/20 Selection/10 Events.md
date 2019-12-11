When a user selects a series point, the **PieChart** fires the [pointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointSelectionChanged') event that you can handle with a function. Assign this function to the [onPointSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onPointSelectionChanged') option when you configure the widget if it is going to remain unchanged during the widget's lifetime. Call the point's [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/Methods/#isSelected') method to check whether it was selected or the selection was cleared.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onPointSelectionChanged: function (e) {
                var point = e.target;
                if (point.isSelected()) {
                    // Commands to execute when the point is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointSelectionChanged)="onPointSelectionChanged($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointSelectionChanged (e) {
            let point = e.target;
            if (point.isSelected()) {
                // Commands to execute when the point is selected
            } else {
                // Commands to execute when the selection is cleared
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

---

Subscribe to the **pointSelectionChanged** event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/EventsMixin/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler') method if you are going to change the event handler at runtime or if you need to attach several handlers to the event. This approach is more typical of jQuery.

    <!--JavaScript-->
    var pointSelectionChangedHandler1 = function (e) {
        var point = e.target;
        // First handler of the "pointSelectionChanged" event
    };

    var pointSelectionChangedHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "pointSelectionChanged" event
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("pointSelectionChanged", pointSelectionChangedHandler1)
        .on("pointSelectionChanged", pointSelectionChangedHandler2);

#####See Also#####
#include common-link-handleevents
