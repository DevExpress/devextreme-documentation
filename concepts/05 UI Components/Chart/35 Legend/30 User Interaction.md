---
tags: chart, legend, hover, hoverMode, legend click, onLegendClick
---
A user can interact with the legend by pausing on legend items. When a user does this, the series that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/legend/hoverMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#hoverMode') property to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="none"></dxo-legend>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxLegend
                hover-mode="none"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxLegend
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Legend
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Legend
                        hoverMode="none"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Series that consist of several elements rather than just series points ([Range Area](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Range_Series/'), all [line](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/10%20Line%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Line_Series/') and [area](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/30%20Area%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Area_Series/') series) can be highlighted _without_ the series points. For this, set the **hoverMode** property to *"excludePoints"*. For other series, this setting has the same effect as *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "excludePoints"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="excludePoints"></dxo-legend>
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

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxLegend
                hover-mode="excludePoints"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxLegend
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Legend
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Legend
                        hoverMode="excludePoints"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Pausing on a legend item causes the [seriesHoverChanged](/api-reference/10%20UI%20Components/dxChart/4%20Events/seriesHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#seriesHoverChanged') event to raise. Refer to the [Series Hover Events](/concepts/05%20UI%20Components/Chart/10%20Series/10%20Hover/10%20Events.md '/Documentation/Guide/UI_Components/Chart/Series/Hover/#Events') topic for details on handling this event.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

In addition, a user can click legend items. By default, the UI component does not react to a click, but you can instruct it to by handling the [legendClick](/api-reference/10%20UI%20Components/dxChart/4%20Events/legendClick.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#legendClick') event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onLegendClick') property when you configure the UI component. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                var series = e.target;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var series = e.target;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var series = e.target;
            // Second handler of the "legendClick" event
        };

        $("#chartContainer").dxChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-chart
        (onLegendClick)="onLegendClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onLegendClick (e) {
            let series = e.target;
            // Event handling commands go here
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
            @legend-click="legendClickHandler($event)"
            ... >
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            legendClickHandler(e) {
                const series = e.target;
                // Event handling commands go here
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
                    onLegendClick={this.legendClickHandler}
                    ... >
                </Chart>
            );
        }

        legendClickHandler(e) {
            const series = e.target;
            // Event handling commands go here
        }
    }

    export default App;

---

#####See Also#####
#include common-link-handleevents
- [Relocate the Legend](/concepts/05%20UI%20Components/Chart/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/UI_Components/Chart/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20UI%20Components/Chart/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/UI_Components/Chart/Legend/Rearrange_Legend_Items/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')


