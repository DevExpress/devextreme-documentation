When a tooltip becomes shown or hidden, the **PieChart** fires the [tooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/tooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#tooltipShown') or [tooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/tooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#tooltipHidden') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onTooltipShown') or [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onTooltipHidden') option respectively, when you configure the widget.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onTooltipShown: function (e) {
                var point = e.target;
                // Handler of the "tooltipShown" event
            },
            onTooltipHidden: function (e) {
                var point = e.target;
                // Handler of the "tooltipHidden" event
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        (onTooltipShown)="onTooltipShown($event)"
        (onTooltipHidden)="onTooltipHidden($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onTooltipShown (e) {
            let point = e.target;
            // Handler of the "tooltipShown" event
        },
        onTooltipHidden (e) {
            let point = e.target;
            // Handler of the "tooltipHidden" event
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
        <DxPieChart ...
            @tooltip-shown="onTooltipShown"
            @tooltip-hidden="onTooltipHidden">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            onTooltipShown(e) {
                let point = e.target;
                // Handler of the "tooltipShown" event
            },
            onTooltipHidden(e) {
                let point = e.target;
                // Handler of the "tooltipHidden" event
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
                    onTooltipShown={onTooltipShown}
                    onTooltipHidden={onTooltipHidden}>
                </PieChart>
            );
        }
    }

    function onTooltipShown(e) {
        let point = e.target;
        // Handler of the "tooltipShown" event
    }
    function onTooltipHidden(e) {
        let point = e.target;
        // Handler of the "tooltipHidden" event
    }

---

If you are going to change the event handlers at runtime or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var tooltipShownHandler1 = function (e) {
        var point = e.target;
        // First handler of the "tooltipShown" event
    };

    var tooltipShownHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "tooltipShown" event
    };

    $("#pieChartContainer").dxPieChart("instance")
        .on("tooltipShown", tooltipShownHandler1)
        .on("tooltipShown", tooltipShownHandler2);

#####See Also#####
#include common-link-handleevents