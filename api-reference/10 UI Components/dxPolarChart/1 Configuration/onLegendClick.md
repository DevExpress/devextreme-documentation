---
id: dxPolarChart.Options.onLegendClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Legend') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxPolarChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The series that corresponds to the clicked legend item; described in the [Series](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/') section.

---
[note]

The [onSeriesClick](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onSeriesClick.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onSeriesClick') function is executed after this function. The following code shows how to prevent this: 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#polarChartContainer").dxPolarChart({
            // ...
            onLegendClick: function (e) {
                e.event.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        cancelSeriesClick (e) {
            e.event.cancel = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPolarChartModule
        ],
        // ...
    })

    <!--HTML--><dx-polar-chart ...
        (onLegendClick)="cancelSeriesClick($event)">
    </dx-polar-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPolarChart ...
            @legend-click="cancelSeriesClick">
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart from 'devextreme-vue/polar-chart';

    export default {
        components: {
            DxPolarChart
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

    import PolarChart from 'devextreme-react/polar-chart';

    class App extends React.Component {
        render() {
            return (
                <PolarChart ...
                    onLegendClick={this.cancelSeriesClick}>
                </PolarChart>
            );
        }

        cancelSeriesClick (e) {
            e.event.cancel = true;
        }
    }

    export default App;

---

[/note]
