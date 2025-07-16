---
id: dxChart.Options.commonAxisSettings.tick
type: Object
---
---
##### shortDescription
Configures major axis tick appearance.

---
Ticks help you align values with their corresponding data points on an axis. The **tick** object configures major ticks that are placed in relation to value labels.

![DevExtreme HTML5 Charts MajorTicks](/images/ChartJS/visual_elements/major_ticks.png)

---

##### jQuery

    <!-- tab: index.js -->
    $('#chart').dxChart({
        commonAxisSettings: {
            tick: {
                visible: true,
                color: "blue",
                length: 20,
                opacity: 0.75,
                shift: 0,
                width: 2,
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-axis-settings>
            <dxo-tick
                [visible]="true"
                color="blue"
                [length]="20"
                [opacity]="0.75"
                [shift]="0"
                [width]="2"
            ></dxo-tick>
        </dxo-common-axis-settings>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxCommonAxisSettings>
                <DxTick
                    :visible="true"
                    color="blue"
                    :length="20"
                    :opacity="0.75"
                    :shift="0"
                    :width="2"
                />
            </DxCommonAxisSettings>
        </DxChart>
    </template>

    <script setup lang="ts">
    import { DxChart, DxCommonAxisSettings, DxTick } from 'devextreme-vue/chart';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chart, CommonAxisSettings, Tick } from 'devextreme-react/chart';

    function App() {
        return (
            <Chart ... >
                <CommonAxisSettings>
                    <Tick
                        visible={true}
                        color="blue"
                        length={20}
                        opacity={0.75}
                        shift={0}
                        width={2}
                    />
                </CommonAxisSettings>
            </Chart>
        )
    }

---

The **commonAxisSettings**.**tick** object specifies common settings for all major ticks in a chart. To configure only those major ticks that belong to a particular axis, use the following objects.

- **argumentAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tick/')     
- **valueAxis**.[tick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tick/')       

Axis-specific settings override common settings.

#####See Also#####
- **argumentAxis**.[tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/argumentAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/tickInterval/') - specifies the tick interval of the argument axis.
- **valueAxis**.[tickInterval](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/tickInterval '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/tickInterval/') - specifies the tick interval of the value axis.
- **commonAxisSettings**.[minorTick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorTick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorTick/') - customizes minor tick appearance.