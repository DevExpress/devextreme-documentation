---
id: dxChart.Options.commonAxisSettings.minorGrid
type: Object
---
---
##### shortDescription
Configures the minor grid.

---
In addition to the [major grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/grid/'), DevExtreme Chart can display a minor grid following the placement of minor ticks.

![DevExtreme HTML5 Charts MinorGridLines](/images/ChartJS/visual_elements/minor_grid_lines.png)

---

##### jQuery

    <!-- tab: index.js -->
    $('#chart').dxChart({
        // ...
        commonAxisSettings: {
            minorGrid: {
                visible: true,
                color: 'blue',
                opacity: 0.1,
                width: 1,
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-axis-settings>
            <dxo-minor-grid
                [visible]="true"
                color="blue"
                [opacity]="0.1"
                [width]="1"
            ></dxo-minor-grid>
        </dxo-common-axis-settings>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxCommonAxisSettings>
                <DxMinorGrid
                    :visible="true"
                    color="blue"
                    :opacity="0.1"
                    :width="1"
                />
            </DxCommonAxisSettings>
        </DxChart>
    </template>

    <script setup lang="ts">
    import { DxChart, DxCommonAxisSettings, DxMinorGrid } from 'devextreme-vue/chart';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chart, CommonAxisSettings, MinorGrid } from 'devextreme-react/chart';

    function App() {
        return (
            <Chart ... >
                <CommonAxisSettings>
                    <MinorGrid
                        visible={true}
                        color="blue"
                        opacity={0.1}
                        width={1}
                    />
                </CommonAxisSettings>
            </Chart>
        )
    }

---

The **commonAxisSettings**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorGrid/') object specifies common settings for all minor grid lines in the chart. To configure only those grid lines that descend from a particular axis, use the following objects.

- **argumentAxis**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/minorGrid/')     
- **valueAxis**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/minorGrid/')       

Axis-specific settings override common settings.

[note]

- Displaying the minor grid alone may impair chart readability. We recommend you implement the minor grid in conjunction with the major grid.
- The component does not display the minor grid on *"discrete"* axes.

[/note]