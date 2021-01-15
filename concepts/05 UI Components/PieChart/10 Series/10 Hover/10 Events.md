When a user hovers the mouse pointer on a series point, the **PieChart** fires the [pointHoverChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxPieChart/Events/#pointHoverChanged') event that you can handle with a function. Assign this function to the [onPointHoverChanged](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/onPointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#onPointHoverChanged') property when you configure the UI component if it is going to remain unchanged during the UI component's lifetime. Call the point's [isHovered()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/Methods/#isHovered') method to check whether the pointer entered or left a series point.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (point.isHovered()) {
                    // Command to execute when the mouse pointer enters the point
                } else {
                    // Command to execute when the mouse pointer leaves the point
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointHoverChanged (e) {
            let point = e.target;
            if (point.isHovered()) {
                // Command to execute when the mouse pointer enters the point
            } else {
                // Command to execute when the mouse pointer leaves the point
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
            @point-hover-changed="onPointHoverChanged">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },

        methods: {
            onPointHoverChanged({ target: point }) {
                if (point.isHovered()) {
                    // Command to execute when the mouse pointer enters the point
                } else {
                    // Command to execute when the mouse pointer leaves the point
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    const onPointHoverChanged = ({ target: point }) => {
        if (point.isHovered()) {
            // Command to execute when the mouse pointer enters the point
        } else {
            // Command to execute when the mouse pointer leaves the point
        }
    };

    const App = () => {
        return (
            <PieChart ...
                onPointHoverChanged={onPointHoverChanged}>
            </PieChart>
        );
    };

    export default App;

---

Subscribe to the **pointHoverChanged** event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxPieChart/Methods/#oneventName_eventHandler') method if you are going to change the event handler at runtime or if you need to attach several handlers to it. This approach is more typical of jQuery.

    <!--JavaScript-->
    var pointHoverChangedHandler1 = function (e) {
        var point = e.target;
        // The "pointHoverChanged" event's first handler
    };

    var pointHoverChangedHandler2 = function (e) {
        var point = e.target;
        // The "pointHoverChanged" event's second handler
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("pointHoverChanged", pointHoverChangedHandler1)
        .on("pointHoverChanged", pointHoverChangedHandler2);

#####See Also#####
#include common-link-handleevents
