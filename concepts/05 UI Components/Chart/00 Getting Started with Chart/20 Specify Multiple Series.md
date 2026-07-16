---

##### jQuery

To configure Chart with multiple series, update your data source with additional value fields and specify additional **series** objects. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

##### Angular

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<dxi-series>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

##### Vue

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<DxSeries>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:

##### React

To configure Chart with multiple series, update your data source with additional value fields and specify additional `<Series>` selectors. This example configures two series to display a [spline](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/SplineSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/SplineSeries/') and a [bar](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/BarSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/BarSeries/') chart:


---

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

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Chart()
        .Series(s => {
            s.Add()
                .Type(SeriesType.Bar)
                .ArgumentField("Month")
                .ValueField("TargetSpend")
                .Name("Budget")
                .Color("#5996ff");
            s.Add()
                .Type(SeriesType.Spline)
                .ArgumentField("Month")
                .ValueField("ActualSpend")
                .Name("Amount Spent")
                .Color("#cb4bfa");
        })
        @* ... *@
    )

    <!-- tab: ChartDataPoint.cs -->
    namespace ASP_NET_Core.Models;
    public class ChartDataPoint {
        public string Month { get; set; }
        public int TargetSpend { get; set; }
        public int ActualSpend { get; set; }
    }

    <!-- tab: ChartData.cs -->
    namespace ASP_NET_Core.Models;
    static class ChartData {
        public static List<ChartDataPoint> ChartDataPoints = [
            new ChartDataPoint { Month = "January", TargetSpend = 12000, ActualSpend = 9500 },
            new ChartDataPoint { Month = "February", TargetSpend = 15500, ActualSpend = 16500 },
            new ChartDataPoint { Month = "March", TargetSpend = 13500, ActualSpend = 12000 },
            new ChartDataPoint { Month = "April", TargetSpend = 16000, ActualSpend = 14000 },
            new ChartDataPoint { Month = "May", TargetSpend = 17000, ActualSpend = 18500 },
            new ChartDataPoint { Month = "June", TargetSpend = 20000, ActualSpend = 17500 },
            new ChartDataPoint { Month = "July", TargetSpend = 14500, ActualSpend = 11000 },
            new ChartDataPoint { Month = "August", TargetSpend = 21000, ActualSpend = 22500 },
            new ChartDataPoint { Month = "September", TargetSpend = 19000, ActualSpend = 18000 },
            new ChartDataPoint { Month = "October", TargetSpend = 22000, ActualSpend = 25000 },
            new ChartDataPoint { Month = "November", TargetSpend = 16000, ActualSpend = 14500 },
            new ChartDataPoint { Month = "December", TargetSpend = 25000, ActualSpend = 27000 },
        ];

        // ...
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxi-chart-series
            type="bar"
            argumentField="month"
            valueField="targetSpend"
            name="Budget"
            color="#5996ff"
        ></dxi-chart-series>
        <dxi-chart-series
            type="spline"
            argumentField="month"
            valueField="actualSpend"
            name="Amount Spent"
            color="#cb4bfa"
        ></dxi-chart-series>
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