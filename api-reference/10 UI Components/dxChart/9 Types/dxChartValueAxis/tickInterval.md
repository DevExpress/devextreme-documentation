---
uid: viz\chart:dxChartValueAxis.tickInterval
type: Number | Object | Enums.TimeInterval
---
---
##### shortDescription
Specifies the interval between [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tick/'). Does not apply to [discrete axes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type').

---
<!--
If the axis displays numbers, set the **tickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **tickInterval** of 0.2 places a tick every 20%. If the axis displays date-time values, set the **tickInterval** to an accepted string value or object that contains one of the fields described in this section, for example:

---
##### jQuery

    &lt;!--JavaScript--&gt;$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    &lt;!--HTML--&gt;&lt;dx-chart ... &gt;
        &lt;dxi-value-axis ... &gt;
            &lt;dxo-tick-interval [days]="5"&gt;&lt;/dxo-tick-interval&gt;
        &lt;/dxi-value-axis&gt;
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
            &lt;DxValueAxis&gt;
                &lt;DxTickInterval :days="5" /&gt;
            &lt;/DxValueAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        ValueAxis,
        TickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ValueAxis&gt;
                        &lt;TickInterval days={5} /&gt;
                    &lt;/ValueAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }

    export default App;     
    
---

When you use a *"logarithmic"* [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type') axis, ticks are generated as an exponentiation. For example, assuming that the [logarithm base](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/logarithmBase.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#logarithmBase') is 10 and the tick interval is 1, ticks are generated at 10&lt;sup&gt;-2&lt;/sup&gt;, 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;0&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;2&lt;/sup&gt;, 10&lt;sup&gt;3&lt;/sup&gt;, etc. If the tick interval is 2, ticks are generated at 10&lt;sup&gt;-1&lt;/sup&gt;, 10&lt;sup&gt;1&lt;/sup&gt;, 10&lt;sup&gt;3&lt;/sup&gt;, etc.

#####See Also#####
- **valueAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tick/')
- **valueAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTickInterval/')

-->