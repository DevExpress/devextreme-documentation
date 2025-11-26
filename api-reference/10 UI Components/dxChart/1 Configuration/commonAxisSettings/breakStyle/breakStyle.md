---
id: dxChart.Options.commonAxisSettings.breakStyle
type: Object
---
---
##### shortDescription
Configures scale break appearance.

---

The following code snippet configures [commonAxisSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonAxisSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/').**breakStyle** to customize items in **valueAxis**.[breaks[]](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/breaks/) and **argumentAxis**.[breaks[]](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/breaks/).

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $("#chartContainer").dxChart({
            commonAxisSettings: {
                breakStyle: {
                    color: "red",
                    line: "straight",
                    width: 15,
                },
            },
            argumentAxis: {
                breaks: [{ startValue: 1998, endValue: 2003 }],
            },
            valueAxis: {
                breaks: [{ startValue: 250, endValue: 350 }],
            },
        })
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart>
        <dxo-chart-common-axis-settings>
            <dxo-chart-break-style
                color="red"
                line="straight"
                [width]="15"
            ></dxo-chart-break-style>
        </dxo-chart-common-axis-settings>
        <dxo-chart-argument-axis>
            <dxi-chart-break startValue="1998" endValue="2003"></dxi-chart-break>
        </dxo-chart-argument-axis>
        <dxo-chart-value-axis>
            <dxi-chart-break startValue="250" endValue="350"></dxi-chart-break>
        <dxo-chart-value-axis>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChart>
            <DxCommonAxisSettings>
                <DxBreakStyle
                    color="red"
                    line="straight"
                    :width="15"
                />
            </DxCommonAxisSettings>
            <DxArgumentAxis>
                <DxBreak startValue="1998" endValue="2003" />
            </DxArgumentAxis>
            <DxValueAxis>
                <DxBreak startValue="250" endValue="350" />
            </DxValueAxis>
        </DxChart>
    </template>

##### React

    <!-- tab: App.tsx -->
    function App() {
        return (
            <Chart>
                <CommonAxisSettings>
                    <BreakStyle
                        color="red"
                        line="straight"
                        width={15}
                    />
                </CommonAxisSettings>
                <ArgumentAxis>
                    <Break startValue="1998" endValue="2003" />
                </ArgumentAxis>
                <ValueAxis>
                    <Break startValue="250" endValue="350" />
                </ValueAxis>
            </Chart>
        )
    }

---
