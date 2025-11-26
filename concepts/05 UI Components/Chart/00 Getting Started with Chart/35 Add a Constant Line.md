DevExtreme Chart can display horizontal or vertical constant lines as points of reference. The following example uses the **valueAxis**.[constantLines](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/valueAxis/constantLines '/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/constantLines/') property to display a horizontal constant line that indicates the yearly spending average (`averageSpend`):

---

##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;

    $(() => {
        $('#chart').dxChart({
            dataSource: chartData,
            valueAxis: [{
                constantLines: [{
                    value: averageSpend,
                    color: '#0000c7',
                    label: {
                        text: 'Yearly Spend Average',
                    },
                }],
            }],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData">
        <dxi-chart-value-axis>
            <dxi-chart-constant-line [value]="averageSpend">
                <dxo-chart-label text="Yearly Spend Average"></dxo-chart-label>
            </dxi-chart-constant-line>
        </dxi-chart-value-axis>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxChart :data-source="chartData" >
                <DxValueAxis>
                    <DxConstantLine
                        :value="averageSpend"
                        color="#0000c7"
                    >
                        <DxLabel
                            text="Yearly Spend Average"
                        />
                    </DxConstantLine>
                </DxValueAxis>
            </DxChart>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    function App(): JSX.Element {
        return (
            <>
                <Chart dataSource={chartData} >
                    <ValueAxis>
                        <ConstantLine
                            value={averageSpend}
                            color='#0000c7'
                        >
                            <Label text='Yearly Spend Average' />
                        </ConstantLine>
                    </ValueAxis>
                </Chart>
            </>
        );
    }

    export default App;

---