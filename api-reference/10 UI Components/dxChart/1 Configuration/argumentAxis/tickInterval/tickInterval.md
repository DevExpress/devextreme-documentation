---
id: dxChart.Options.argumentAxis.tickInterval
inherits: VizTimeInterval
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/'').

---
Major ticks divide an axis into segments, thus improving the viewer's perception of visualized data. Major ticks are generated automatically, unless the **tickInterval** property is set.

If the axis displays numbers, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis ... >
            <dxo-tick-interval [days]="5"></dxo-tick-interval>
        </dxo-argument-axis>
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
            <DxArgumentAxis>
                <DxTickInterval :days="5" />
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTickInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTickInterval
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import Chart, {
        ArgumentAxis,
        TickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis>
                        <TickInterval days={5} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;     

---

When you use an axis of the *"logarithmic"* [type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type), ticks are generated on a base of powers. For example, assuming that the [logarithm base](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#logarithmBase) is 10 and the tick interval is 1, ticks are generated at 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. If the tick interval becomes 2, ticks are generated at 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

When using the UI component as an <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400943/devextreme-aspnet-mvc-controls" target="_blank">ASP.NET MVC 5 Control</a> or a <a href="https://docs.devexpress.com/AspNetCore/400263/aspnet-core-controls#devextreme-based-aspnet-core-controls" target="_blank">DevExtreme-Based ASP.NET Core Control</a>, specify this property using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **argumentAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/'') - configures the appearance of major ticks.
- **argumentAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTickInterval/') - specifies the interval between minor ticks.
