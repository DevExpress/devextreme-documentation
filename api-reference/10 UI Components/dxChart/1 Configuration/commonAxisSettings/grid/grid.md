---
id: dxChart.Options.commonAxisSettings.grid
type: Object
---
---
##### shortDescription
Configures the grid.

---
Gridlines can be considered extensions of [ticks](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/tick '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/tick/').

![DevExtreme HTML5 Charts GridLines](/images/ChartJS/visual_elements/grid_lines.png)

---

##### jQuery

    <!-- tab: index.js -->
    $('#chart').dxChart({
        commonAxisSettings: {
            grid: {
                visible: true,
                color: 'blue',
                opacity: 0.25,
                width: 2,
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-chart-common-axis-settings>
            <dxo-chart-grid
                [visible]="true"
                color="blue"
                [opacity]="0.25"
                [width]="2"
            ></dxo-chart-grid>
        </dxo-chart-common-axis-settings>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart ... >
            <DxCommonAxisSettings>
                <DxGrid
                    :visible="true"
                    color="blue"
                    :opacity="0.25"
                    :width="2"
                />
            </DxCommonAxisSettings>
        </DxChart>
    </template>

    <script setup lang="ts">
    import { DxChart, DxCommonAxisSettings, DxGrid } from 'devextreme-vue/chart';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chart, CommonAxisSettings, Grid } from 'devextreme-react/chart';

    function App() {
        return (
            <Chart ... >
                <CommonAxisSettings>
                    <Grid
                        visible={true}
                        color="blue"
                        opacity={0.25}
                        width={2}
                    />
                </CommonAxisSettings>
            </Chart>
        )
    }

---

The **commonAxisSettings**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/grid/') object specifies common settings for all gridlines on a chart. To configure only those grid lines that descend from a particular axis, use the following objects:

- **argumentAxis**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/grid/')     
- **valueAxis**.[grid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/grid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/grid/')       

Axis-specific settings override common settings.

#####See Also#####
- **commonAxisSettings**.[minorGrid](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings/minorGrid '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/minorGrid/') - configures the minor grid built on minor ticks.