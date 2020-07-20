---
id: dxChart.Options.onLegendClick
type: function(e) | String
default: null
EventForAction: dxChart.legendClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series that corresponds to the clicked legend item; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') section.

---
[note]

The [onSeriesClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onSeriesClick') function is executed after this function. The following code shows how to prevent this: 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                e.event.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        cancelSeriesClick (e) {
            e.event.cancel = true;
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
                e.event.cancel = true;
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
                <Chart ...
                    onLegendClick={this.cancelSeriesClick}>
                </Chart>
            );
        }

        cancelSeriesClick (e) {
            e.event.cancel = true;
        }
    }

    export default App;

---

[/note]

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}