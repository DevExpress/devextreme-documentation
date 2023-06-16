When a user pauses on a series point, the Chart fires the [pointHoverChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointHoverChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onPointHoverChanged](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onPointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointHoverChanged') property when you configure the UI component. To check whether the pointer entered or left a series, call the [isHovered()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/Methods/#isHovered') method of the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (point.isHovered()) {
                    // Commands to execute when the point is hovered over
                } else {
                    // Commands to execute when the point is hovered out
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onPointHoverChanged (e) {
            const point = e.target;
            if (point.isHovered()) {
                // Commands to execute when the point is hovered over
            } else {
                // Commands to execute when the point is hovered out
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart
            @point-hover-changed="onPointHoverChanged($event)"
            ...
        >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            onPointHoverChanged (e) {
                const point = e.target;
                if (point.isHovered()) {
                    // Commands to execute when the point is hovered over
                } else {
                    // Commands to execute when the point is hovered out
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart
                    onPointHoverChanged={this.onPointHoverChanged}
                    ...
                >
                </Chart>
            );
        }

        onPointHoverChanged (e) {
            const point = e.target;
            if (point.isHovered()) {
                // Commands to execute when the point is hovered over
            } else {
                // Commands to execute when the point is hovered out
            }
        }
    }

    export default App;

---

---
##### jQuery

If you are going to change the event handler at runtime or if you need to attach several handlers to the **pointHoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    var pointHoverChangedHandler1 = function (e) {
        var point = e.target;
        // First handler of the "pointHoverChanged" event
    };

    var pointHoverChangedHandler2 = function (e) {
        var point = e.target;
        // Second handler of the "pointHoverChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("pointHoverChanged", pointHoverChangedHandler1)
        .on("pointHoverChanged", pointHoverChangedHandler2);

---

#####See Also#####
#include common-link-handleevents
- [Series Hover Events](/concepts/05%20UI%20Components/Chart/10%20Series/10%20Hover/10%20Events.md '/Documentation/Guide/UI_Components/Chart/Series/Hover/#Events')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
