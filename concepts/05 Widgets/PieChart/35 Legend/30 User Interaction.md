A user can interact with the legend by pausing on legend items. When a user does this, the point(s) that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/legend/hoverMode.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/legend/#hoverMode') option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart>
        <dxo-legend hoverMode="none"></dxo-legend>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ... >
            <DxLegend hover-mode="none"/>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxLegend
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Legend
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Legend hoverMode="none" />
                </PieChart>
            );
        }
    }

---

Pausing on a legend item causes the [pointHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointHoverChanged') event to raise. Refer to the [Series Hover Events](/concepts/05%20Widgets/PieChart/10%20Series/10%20Hover/10%20Events.md '/Documentation/Guide/Widgets/PieChart/Series/Hover/#Events') topic for details on handling this event.

In addition, a user can click legend items. The widget does not react to this by default, but you can instruct it to by handling the [legendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/4%20Events/legendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#legendClick') event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#onLegendClick') option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            onLegendClick: function (e) {
                var points = e.points;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var points = e.points;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var points = e.points;
            // Second handler of the "legendClick" event
        };

        $("#pieChartContainer").dxPieChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        (onLegendClick)="onLegendClick($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onLegendClick (e) {
            let points = e.points;
            // Event handling commands go here
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
                let points = e.points;
                // Event handling commands go here
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
        let points = e.points;
        // Event handling commands go here
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Pie/"
}

#####See Also#####
#include common-link-handleevents
