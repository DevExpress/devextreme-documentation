---
id: dxChart.Options.valueAxis.tickInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tick/'). Does not apply to [discrete axes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type').

---
If the axis displays numbers, set the **tickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **tickInterval** of 0.2 places a tick every 20%. If the axis displays date-time values, set the **tickInterval** to an accepted string value or object that contains one of the fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis ... >
            <dxo-tick-interval [days]="5"></dxo-tick-interval>
        </dxi-value-axis>
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
            <DxValueAxis>
                <DxTickInterval :days="5" />
            </DxValueAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxValueAxis,
        DxTickInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxValueAxis,
            DxTickInterval
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        ValueAxis,
        TickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis>
                        <TickInterval days={5} />
                    </ValueAxis>
                </Chart>
            );
        }
    }

    export default App;     
    
---

When you use a *"logarithmic"* [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type') axis, ticks are generated as an exponentiation. For example, assuming that the [logarithm base](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#logarithmBase') is 10 and the tick interval is 1, ticks are generated at 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. If the tick interval is 2, ticks are generated at 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

#####See Also#####
- **valueAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tick/')
- **valueAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTickInterval/')
