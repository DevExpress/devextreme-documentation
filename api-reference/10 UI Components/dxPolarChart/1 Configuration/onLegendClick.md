---
id: dxPolarChart.Options.onLegendClick
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Legend') is clicked or tapped.

##### param(e): LegendClickEvent
Information about the event.

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
                e.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPolarChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        cancelSeriesClick (e) {
            e.cancel = true;
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
                e.cancel = true;
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
            e.cancel = true;
        }
    }

    export default App;

---

[/note]
