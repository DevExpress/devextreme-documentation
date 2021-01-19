Axis ticks divide an axis into parts, and thus the readability of visualized data is improved. There are major and minor ticks. They differ in appearance.

![DevExtreme HTML5 JavaScript Charts AxisTicks](/images/ChartJS/visual_elements/axis_ticks.png)

To configure major or minor ticks, use the [tick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/') or [minorTick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/') object respectively. Properties in these objects change the **color**, **length**, **width**, and **opacity** of ticks. But before specifying them, make sure that you have made ticks [visible](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonAxisSettings/tick/visible.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/#visible').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis, or commonAxisSettings
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis> <!-- or dxi-value-axis, or dxo-common-axis-settings -->
            <dxo-tick [visible]="true"></dxo-tick>
            <dxo-minor-tick [visible]="true"></dxo-minor-tick>
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
            <DxArgumentAxis> <!-- or DxValueAxis, or DxCommonAxisSettings -->
                <DxTick :visible="true"/>
                <DxMinorTick :visible="true"/>
            </DxArgumentAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxArgumentAxis,
        DxTick,
        DxMinorTick
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxArgumentAxis,
            DxTick,
            DxMinorTick
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ArgumentAxis,
        Tick,
        MinorTick
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <ArgumentAxis> {/* or ValueAxis, or CommonAxisSettings */}
                        <Tick visible={true} />
                        <MinorTick visible={true} />
                    </ArgumentAxis>
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Arrange Axis Ticks](/concepts/05%20Widgets/Chart/20%20Axes/10%20Arrange%20Axis%20Ticks '/Documentation/Guide/Widgets/Chart/Axes/Arrange_Axis_Ticks/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, axis ticks, major ticks, minor ticks, ticks' appearance
