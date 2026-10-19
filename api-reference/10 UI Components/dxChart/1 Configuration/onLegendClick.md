---
id: dxChart.Options.onLegendClick
type: function(e)
default: undefined
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20UI%20Components/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Legend/Overview/') is clicked or tapped.

##### param(e): viz/chart:LegendClickEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.target): chartSeriesObject
The series that corresponds to the clicked legend item; described in the [Series](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/') section.

##### field(e.cancel): Boolean
Allows you to cancel the legend item click.

---
[note]

The [onSeriesClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onSeriesClick') function is executed after this function. The following code shows how to prevent this: 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                e.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        cancelSeriesClick (e) {
            e.cancel = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

    <!--HTML--><dx-chart ...
        (onLegendClick)="cancelSeriesClick($event)">
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ...
            @legend-click="cancelSeriesClick">
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            cancelSeriesClick (e) {
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import React, { useCallback } from 'react';

    import Chart, { type ChartTypes } from 'devextreme-react/chart';

    function App() {
        const cancelSeriesClick = useCallback((e: ChartTypes.LegendClickEvent) => {
            e.cancel = true;
        }, []);

        return (
            <Chart ...
                onLegendClick={cancelSeriesClick}>
            </Chart>
        );
    }

    export default App;

---

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}