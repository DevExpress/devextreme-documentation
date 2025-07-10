To configure how Chart displays data, specify **series** object properties. This example implements the following properties: [type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type), [name](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#name), and [color](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#color).

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#chart').dxChart({
            dataSource: chartData,
            series: [{
                type: 'bar',
                argumentField: 'month',
                valueField: 'targetSpend',
                name: 'Budget',
                color: '#5996ff',
            }],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxi-series
            type="bar"
            argumentField="month"
            valueField="targetSpend"
            name="Budget"
            color="#5996ff"
        ></dxi-series>
    </dx-chart>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div>
            <DxChart :data-source="chartData" >
                <DxSeries
                    type="bar"
                    argument-field="month"
                    value-field="targetSpend"
                    name="Budget"
                    color="#5996ff"
                />
            </DxChart>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    function App(): JSX.Element {
        return (
            <>
                <Chart dataSource={chartData} >
                    <Series
                        type='bar'
                        argumentField='month'
                        valueField='targetSpend'
                        name='Budget'
                        color='#5996ff'
                    />
                </Chart>
            </>
        );
    }

    export default App;

---