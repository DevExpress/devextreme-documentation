---
uid: viz/chart:dxChartArgumentAxis.tickInterval
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/').

---
<!--
Major ticks divide an axis into segments, thus improving the viewer's perception of visualized data. Major ticks are generated automatically, unless the **tickInterval** property is set.

If the axis displays numbers, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    &lt;!--JavaScript--&gt;$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    &lt;!--HTML--&gt;&lt;dx-chart ... &gt;
        &lt;dxo-argument-axis ... &gt;
            &lt;dxo-tick-interval [days]="5"&gt;&lt;/dxo-tick-interval&gt;
        &lt;/dxo-argument-axis&gt;
    &lt;/dx-chart&gt;

    &lt;!--TypeScript--&gt;
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

    &lt;!-- tab: App.vue --&gt;
    &lt;template&gt;
        &lt;DxChart ... &gt;
            &lt;DxArgumentAxis&gt;
                &lt;DxTickInterval :days="5" /&gt;
            &lt;/DxArgumentAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        ArgumentAxis,
        TickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ArgumentAxis&gt;
                        &lt;TickInterval days={5} /&gt;
                    &lt;/ArgumentAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }

    export default App;     

---

When you use an axis of the *"logarithmic"* [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type'), ticks are generated on a base of powers. For example, assuming that the [logarithm base](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#logarithmBase') is 10 and the tick interval is 1, ticks are generated at 10&lt;sup&gt;-2&lt;/sup&gt;, 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;0&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt;, 10&lt;sup&gt;3&lt;/sup&gt;, etc. If the tick interval becomes 2, ticks are generated at 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;3&lt;/sup&gt;, etc.

#####See Also#####
- **argumentAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/') - configures the appearance of major ticks.
- **argumentAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTickInterval/') - specifies the interval between minor ticks.

-->