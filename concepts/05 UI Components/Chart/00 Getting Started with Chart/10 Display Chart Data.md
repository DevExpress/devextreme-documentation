To bind DevExtreme Chart to data, specify the [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource) property. Ensure that the component data source contains items with at least two fields: a value and an argument. Implement the `arg` and `val` field names to display data. Specify [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/).[valueField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#valueField) and **series**.[argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#argumentField) to implement custom value and argument field names:

---

##### jQuery

    <!-- tab: index.js -->
    $(() => {
        $('#chart').dxChart({
            dataSource: chartData,
            series: [{
                argumentField: 'month',
                valueField: 'targetSpend',
            }],
        });
    });

    const chartData = [
        { month: 'January', targetSpend: 12000 },
        { month: 'February', targetSpend: 15500 },
        { month: 'March', targetSpend: 13500 },
        { month: 'April', targetSpend: 16000 },
        { month: 'May', targetSpend: 17000 },
        { month: 'June', targetSpend: 20000 },
        { month: 'July', targetSpend: 14500 },
        { month: 'August', targetSpend: 21000 },
        { month: 'September', targetSpend: 19000 },
        { month: 'October', targetSpend: 22000 },
        { month: 'November', targetSpend: 16000 },
        { month: 'December', targetSpend: 25000 },
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxi-series
            argumentField="month"
            valueField="targetSpend"
        ></dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        chartData = [
            { month: 'January', targetSpend: 12000 },
            { month: 'February', targetSpend: 15500 },
            { month: 'March', targetSpend: 13500 },
            { month: 'April', targetSpend: 16000 },
            { month: 'May', targetSpend: 17000 },
            { month: 'June', targetSpend: 20000 },
            { month: 'July', targetSpend: 14500 },
            { month: 'August', targetSpend: 21000 },
            { month: 'September', targetSpend: 19000 },
            { month: 'October', targetSpend: 22000 },
            { month: 'November', targetSpend: 16000 },
            { month: 'December', targetSpend: 25000 },
        ];
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">

    const chartData = [
        { month: 'January', targetSpend: 12000 },
        { month: 'February', targetSpend: 15500 },
        { month: 'March', targetSpend: 13500 },
        { month: 'April', targetSpend: 16000 },
        { month: 'May', targetSpend: 17000 },
        { month: 'June', targetSpend: 20000 },
        { month: 'July', targetSpend: 14500 },
        { month: 'August', targetSpend: 21000 },
        { month: 'September', targetSpend: 19000 },
        { month: 'October', targetSpend: 22000 },
        { month: 'November', targetSpend: 16000 },
        { month: 'December', targetSpend: 25000 },
    ];

    </script>

    <template>
        <div>
            <DxChart :data-source="chartData" >
                <DxSeries
                    argument-field="month"
                    value-field="targetSpend"
                />
            </DxChart>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    const chartData = [
        { month: 'January', targetSpend: 12000 },
        { month: 'February', targetSpend: 15500 },
        { month: 'March', targetSpend: 13500 },
        { month: 'April', targetSpend: 16000 },
        { month: 'May', targetSpend: 17000 },
        { month: 'June', targetSpend: 20000 },
        { month: 'July', targetSpend: 14500 },
        { month: 'August', targetSpend: 21000 },
        { month: 'September', targetSpend: 19000 },
        { month: 'October', targetSpend: 22000 },
        { month: 'November', targetSpend: 16000 },
        { month: 'December', targetSpend: 25000 },
    ];

    function App(): JSX.Element {
        return (
            <>
                <Chart dataSource={chartData} >
                    <Series
                        argumentField='month'
                        valueField='targetSpend'
                    />
                </Chart>
            </>
        );
    }

    export default App;

---