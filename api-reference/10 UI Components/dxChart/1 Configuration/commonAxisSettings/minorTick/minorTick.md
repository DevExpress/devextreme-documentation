---
id: dxChart.Options.commonAxisSettings.minorTick
type: Object
---
---
##### shortDescription
Configures the appearance of minor axis ticks.

---
In addition to [major ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/tick/'), DevExtreme Chart can display minor ticks. The component places minor ticks between major ticks.

![DevExtreme HTML5 Charts MinorTicks](/images/ChartJS/visual_elements/minor_ticks.png)

---

##### jQuery

    <!-- tab: index.js -->
    $('#chart').dxChart({
        commonAxisSettings: {
            minorTick: {
                visible: true,
                color: "blue",
                length: 10,
                opacity: 0.5,
                shift: 0,
                width: 1,
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-axis-settings>
            <dxo-minor-tick
                [visible]="true"
                color="blue"
                [length]="10"
                [opacity]="0.5"
                [shift]="0"
                [width]="1"
            ></dxo-minor-tick>
        </dxo-common-axis-settings>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxCommonAxisSettings>
                <DxMinorTick
                    :visible="true"
                    color="blue"
                    :length="10"
                    :opacity="0.5"
                    :shift="0"
                    :width="1"
                />
            </DxCommonAxisSettings>
        </DxChart>
    </template>

    <script setup lang="ts">
    import { DxChart, DxCommonAxisSettings, DxMinorTick } from 'devextreme-vue/chart';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chart, CommonAxisSettings, MinorTick } from 'devextreme-react/chart';

    function App() {
        return (
            <Chart ... >
                <CommonAxisSettings>
                    <MinorTick
                        visible={true}
                        color="blue"
                        length={10}
                        opacity={0.5}
                        shift={0}
                        width={1}
                    />
                </CommonAxisSettings>
            </Chart>
        )
    }

---

The **commonAxisSettings**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorTick/') object specifies common settings for all minor ticks in the chart. To configure only those minor ticks that belong to a particular axis, use the following objects.

- **argumentAxis**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTick/')     
- **valueAxis**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTick/')     

Axis-specific settings override common settings.

[note] The component does not display minor ticks for *"discrete"* axes.

#####See Also#####
- **argumentAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorTickInterval/') - specifies the minor tick interval of the argument axis.
- **valueAxis**.[minorTickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/minorTickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorTickInterval/') - specifies the minor tick interval of the value axis.