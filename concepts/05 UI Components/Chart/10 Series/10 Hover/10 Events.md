When a user pauses on a series, the **Chart** fires the [seriesHoverChanged](/api-reference/10%20UI%20Components/dxChart/4%20Events/seriesHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#seriesHoverChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onSeriesHoverChanged](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesHoverChanged') option when you configure the UI component. To check whether the pointer entered or left a series, call the [isHovered()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isHovered') method in the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesHoverChanged: function (e) {
                var series = e.target;
                if (series.isHovered()) {
                    // Commands to execute when the series is hovered over
                } else {
                    // Commands to execute when the series is hovered out
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesHoverChanged)="onSeriesHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSeriesHoverChanged (e) {
            const series = e.target;
            if (series.isHovered()) {
                // Commands to execute when the series is hovered over
            } else {
                // Commands to execute when the series is hovered out
            }
        }
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
            @series-hover-changed="onSeriesHoverChanged"
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
            onSeriesHoverChanged (e) {
                const series = e.target;
                if (series.isHovered()) {
                    // Commands to execute when the series is hovered over
                } else {
                    // Commands to execute when the series is hovered out
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
                    onSeriesHoverChanged={onSeriesHoverChanged}
                >
                </Chart>
            );
        }
    }

    function onSeriesHoverChanged (e) {
        const series = e.target;
        if (series.isHovered()) {
            // Commands to execute when the series is hovered over
        } else {
            // Commands to execute when the series is hovered out
        }
    }

    export default App;

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **seriesHoverChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var seriesHoverChangedHandler1 = function (e) {
        var series = e.target;
        // First handler of the "seriesHoverChanged" event
    };

    var seriesHoverChangedHandler2 = function (e) {
        var series = e.target;
        // Second handler of the "seriesHoverChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("seriesHoverChanged", seriesHoverChangedHandler1)
        .on("seriesHoverChanged", seriesHoverChangedHandler2);

[note]There are series that consist of points only, for example, [bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/') or [financial](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Financial_Series/') series. For these series, subscribe to the [pointHoverChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointHoverChanged') event instead of **seriesHoverChanged** (see the [Point Hover Events](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/10%20Hover/10%20Events.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Hover/#Events') topic).

#####See Also#####
#include common-link-handleevents
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
