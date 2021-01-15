When a user selects a series, the **Chart** fires the [seriesSelectionChanged](/api-reference/10%20UI%20Components/dxChart/4%20Events/seriesSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#seriesSelectionChanged') event that you can handle with a function. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onSeriesSelectionChanged](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesSelectionChanged') property when you configure the UI component. To check whether a series was selected or the selection was cleared, call the [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isSelected') method of the series.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onSeriesSelectionChanged: function (e) {
                var series = e.target;
                if (series.isSelected()) {
                    // Commands to execute when the series is selected
                } else {
                    // Commands to execute when the selection is cleared
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        (onSeriesSelectionChanged)="onSeriesSelectionChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSeriesSelectionChanged (e) {
            const series = e.target;
            if (series.isSelected()) {
                // Commands to execute when the series is selected
            } else {
                // Commands to execute when the selection is cleared
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
            @series-selection-changed="onSeriesSelectionChanged"
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
            onSeriesSelectionChanged (e) {
                const series = e.target;
                if (series.isSelected()) {
                    // Commands to execute when the series is selected
                } else {
                    // Commands to execute when the selection is cleared
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
                    onSeriesSelectionChanged={onSeriesSelectionChanged}
                >
                </Chart>
            );
        }
    }

    function onSeriesSelectionChanged (e) {
        const series = e.target;
        if (series.isSelected()) {
            // Commands to execute when the series is selected
        } else {
            // Commands to execute when the selection is cleared
        }
    }

    export default App;

---

If you are going to change the event handler at runtime or if you need to attach several handlers to the **seriesSelectionChanged** event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxChart/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    var seriesSelectionChangedHandler1 = function (e) {
        var series = e.target;
        // First handler of the "seriesSelectionChanged" event
    };

    var seriesSelectionChangedHandler2 = function (e) {
        var series = e.target;
        // Second handler of the "seriesSelectionChanged" event
    };

    $("#chartContainer").dxChart("instance")
        .on("seriesSelectionChanged", seriesSelectionChangedHandler1)
        .on("seriesSelectionChanged", seriesSelectionChangedHandler2);

[note]There are series that consist of points only, for example, [bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/') or [financial](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Financial_Series/') series. For these series, subscribe to the [pointSelectionChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointSelectionChanged') event instead of **seriesSelectionChanged** (see the [Point Selection Events](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/20%20Selection/10%20Events.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Selection/#Events') topic).

#####See Also#####
#include common-link-handleevents
- [Point Selection Events](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/20%20Selection/10%20Events.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Selection/#Events')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
