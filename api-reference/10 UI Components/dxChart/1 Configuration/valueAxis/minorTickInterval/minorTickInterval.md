---
id: dxChart.Options.valueAxis.minorTickInterval
acceptValues: 'day' | 'hour' | 'millisecond' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year'
type: Number | Object | String
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the interval between [minor ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/'). Applies only to [continuous axes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type').

---
If the axis displays numbers, set the **minorTickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **minorTickInterval** of 0.05 places a minor tick every 5%. If the axis displays date-time values, set the **minorTickInterval** to an accepted string value or an object that contains one of the fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis ... >
            <dxo-minor-tick-interval [days]="5"></dxo-minor-tick-interval>
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
                <DxMinorTickInterval :days="5" />
            </DxValueAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxValueAxis,
        DxMinorTickInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxValueAxis,
            DxMinorTickInterval
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        ValueAxis,
        MinorTickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ValueAxis>
                        <MinorTickInterval days={5} />
                    </ValueAxis>
                </Chart>
            );
        }
    }

    export default App;     

---

#####See Also#####
- **valueAxis**.[minorTickCount](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#minorTickCount')
- **valueAxis**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/')
- **valueAxis**.[tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/')
