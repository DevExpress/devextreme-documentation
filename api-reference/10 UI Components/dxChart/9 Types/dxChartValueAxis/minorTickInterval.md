---
uid: viz/chart:dxChartValueAxis.minorTickInterval
---
---
##### shortDescription
Specifies the interval between [minor ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/'). Applies only to [continuous axes](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#type').

---
<!--
If the axis displays numbers, set the **minorTickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **minorTickInterval** of 0.05 places a minor tick every 5%. If the axis displays date-time values, set the **minorTickInterval** to an accepted string value or an object that contains one of the fields described in this section, for example:

---
##### jQuery

    &lt;!--JavaScript--&gt;$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    &lt;!--HTML--&gt;&lt;dx-chart ... &gt;
        &lt;dxi-value-axis ... &gt;
            &lt;dxo-minor-tick-interval [days]="5"&gt;&lt;/dxo-minor-tick-interval&gt;
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
                &lt;DxMinorTickInterval :days="5" /&gt;
            &lt;/DxValueAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
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
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        ValueAxis,
        MinorTickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ValueAxis&gt;
                        &lt;MinorTickInterval days={5} /&gt;
                    &lt;/ValueAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }

    export default App;     

---

#####See Also#####
- **valueAxis**.[minorTickCount](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/#minorTickCount')
- **valueAxis**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/')
- **valueAxis**.[tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/')

-->