---

##### jQuery

To configure Chart with multiple series, update your data source with additional value fields and specify additional **series** objects. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

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
            }, {
                type: 'spline',
                argumentField: 'month',
                valueField: 'actualSpend',
                name: 'Amount Spent',
                color: '#cb4bfa',
            }],
        });
    });

    const chartData = [
        { month: 'January', targetSpend: 12000, actualSpend: 9500 },
        { month: 'February', targetSpend: 15500, actualSpend: 16500 },
        { month: 'March', targetSpend: 13500, actualSpend: 12000 },
        { month: 'April', targetSpend: 16000, actualSpend: 14000 },
        { month: 'May', targetSpend: 17000, actualSpend: 18500 },
        { month: 'June', targetSpend: 20000, actualSpend: 17500 },
        { month: 'July', targetSpend: 14500, actualSpend: 11000 },
        { month: 'August', targetSpend: 21000, actualSpend: 22500 },
        { month: 'September', targetSpend: 19000, actualSpend: 18000 },
        { month: 'October', targetSpend: 22000, actualSpend: 25000 },
        { month: 'November', targetSpend: 16000, actualSpend: 14500 },
        { month: 'December', targetSpend: 25000, actualSpend: 27000 },
    ];

##### Angular

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<dxi-series>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxi-series
            type="bar"
            argumentField="month"
            valueField="targetSpend"
            name="Budget"
            color="#5996ff"
        ></dxi-series>
        <dxi-series
            type="spline"
            argumentField="month"
            valueField="actualSpend"
            name="Amount Spent"
            color="#cb4bfa"
        ></dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        chartData = [
            { month: 'January', targetSpend: 12000, actualSpend: 9500 },
            { month: 'February', targetSpend: 15500, actualSpend: 16500 },
            { month: 'March', targetSpend: 13500, actualSpend: 12000 },
            { month: 'April', targetSpend: 16000, actualSpend: 14000 },
            { month: 'May', targetSpend: 17000, actualSpend: 18500 },
            { month: 'June', targetSpend: 20000, actualSpend: 17500 },
            { month: 'July', targetSpend: 14500, actualSpend: 11000 },
            { month: 'August', targetSpend: 21000, actualSpend: 22500 },
            { month: 'September', targetSpend: 19000, actualSpend: 18000 },
            { month: 'October', targetSpend: 22000, actualSpend: 25000 },
            { month: 'November', targetSpend: 16000, actualSpend: 14500 },
            { month: 'December', targetSpend: 25000, actualSpend: 27000 },
        ];
    }

##### Vue

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<DxSeries>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

    <!-- tab: App.vue -->
    <script setup lang="ts">

    const chartData = [
        { month: 'January', targetSpend: 12000, actualSpend: 9500 },
        { month: 'February', targetSpend: 15500, actualSpend: 16500 },
        { month: 'March', targetSpend: 13500, actualSpend: 12000 },
        { month: 'April', targetSpend: 16000, actualSpend: 14000 },
        { month: 'May', targetSpend: 17000, actualSpend: 18500 },
        { month: 'June', targetSpend: 20000, actualSpend: 17500 },
        { month: 'July', targetSpend: 14500, actualSpend: 11000 },
        { month: 'August', targetSpend: 21000, actualSpend: 22500 },
        { month: 'September', targetSpend: 19000, actualSpend: 18000 },
        { month: 'October', targetSpend: 22000, actualSpend: 25000 },
        { month: 'November', targetSpend: 16000, actualSpend: 14500 },
        { month: 'December', targetSpend: 25000, actualSpend: 27000 },
    ];

    </script>

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
                <DxSeries
                    type="spline"
                    argument-field="month"
                    value-field="actualSpend"
                    name="Amount Spent"
                    color="#cb4bfa"
                />
            </DxChart>
        </div>
    </template>

##### React

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<Series>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

    <!-- tab: App.tsx -->
    const chartData = [
        { month: 'January', targetSpend: 12000, actualSpend: 9500 },
        { month: 'February', targetSpend: 15500, actualSpend: 16500 },
        { month: 'March', targetSpend: 13500, actualSpend: 12000 },
        { month: 'April', targetSpend: 16000, actualSpend: 14000 },
        { month: 'May', targetSpend: 17000, actualSpend: 18500 },
        { month: 'June', targetSpend: 20000, actualSpend: 17500 },
        { month: 'July', targetSpend: 14500, actualSpend: 11000 },
        { month: 'August', targetSpend: 21000, actualSpend: 22500 },
        { month: 'September', targetSpend: 19000, actualSpend: 18000 },
        { month: 'October', targetSpend: 22000, actualSpend: 25000 },
        { month: 'November', targetSpend: 16000, actualSpend: 14500 },
        { month: 'December', targetSpend: 25000, actualSpend: 27000 },
    ];

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
                    <Series
                        type='spline'
                        argumentField='month'
                        valueField='actualSpend'
                        name='Amount Spent'
                        color='#cb4bfa'
                    />
                </Chart>
            </>
        );
    }

    export default App;

---