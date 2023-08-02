---
uid: viz/chart:ArgumentAxis.minorTickInterval
type: Number | Object | Enums.TimeInterval
---
---
##### shortDescription
Specifies the interval between [minor ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/'). Applies only to the axes of the *"continuous"* [type](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#type').

---
<!--
Minor ticks divide the segment between two neighboring [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/') into smaller segments. Minor ticks are generated automatically, unless the **minorTickInterval** property is set.

If the axis displays numbers, assign a number to this property. If the axis displays date-time values, assign one of the accepted string values or an object to this property. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    &lt;!--JavaScript--&gt;$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    &lt;!--HTML--&gt;&lt;dx-chart ... &gt;
        &lt;dxo-argument-axis ... &gt;
            &lt;dxo-minor-tick-interval [days]="5"&gt;&lt;/dxo-minor-tick-interval&gt;
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
                &lt;DxMinorTickInterval :days="5" /&gt;
            &lt;/DxArgumentAxis&gt;
        &lt;/DxChart&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import DxChart, {
        DxArgumentAxis,
        DxMinorTickInterval
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxMinorTickInterval
        }
    }
    &lt;/script&gt;

##### React

    &lt;!-- tab: App.js --&gt;
    import React from 'react';

    import Chart, {
        ArgumentAxis,
        MinorTickInterval
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                &lt;Chart ... &gt;
                    &lt;ArgumentAxis&gt;
                        &lt;MinorTickInterval days={5} /&gt;
                    &lt;/ArgumentAxis&gt;
                &lt;/Chart&gt;
            );
        }
    }

    export default App;     

---


#####See Also#####
- **argumentAxis**.[minorTickCount](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/minorTickCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#minorTickCount') - specifies how many minor ticks to place between two neighboring major ticks.
- **argumentAxis**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/') - configures the appearance of minor ticks.
- **argumentAxis**.[tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/') - specifies the interval between major ticks.

-->