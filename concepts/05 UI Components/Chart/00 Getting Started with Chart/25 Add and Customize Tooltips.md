To add tooltips to a Chart, assign `true` to the **tooltip**.[enabled](/api-reference/10%20UI%20Components/BaseWidget/1%20Configuration/tooltip/enabled.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#enabled') property. Default tooltips display values when users hover over points. To implement custom tooltips, define the [customizeTooltip](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip') function. This example uses **customizeTooltip** to display the difference between current and average `actualSpend` values (calculated in the `calculateAverageSpend()` method):

---

##### jQuery

    <!-- tab: index.js -->
    const formatNumber = DevExpress.localization.formatNumber;

    $(() => {
        $('#chart').dxChart({
            dataSource: chartData,
            tooltip: {
                enabled: true,
                customizeTooltip,
            },
        });
    });

    const averageSpend = calculateAverageSpend();

    function calculateAverageSpend() {
        const sum = chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

        return sum / chartData.length;
    }

    function customizeTooltip(data) {
        if (data.seriesName === 'Budget') {
            return { text: formatNumber(data.value, 'currency') };
        }
        const isValueAboveAverage = data.value > averageSpend;
        if (isValueAboveAverage) {
            return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - averageSpend, 'currency')} above average spending.` };
        }

        return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(averageSpend - data.value, 'currency')} below average spending.` };
    }

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().Chart()
        .Tooltip(t => t
            .Enabled(true)
            .CustomizeTooltip("customizeTooltip")
        )
        @* ... *@
    )

    <script>
        const formatNumber = DevExpress.localization.formatNumber;

        function customizeTooltip(data) {
            if (data.seriesName === 'Budget') {
                return { text: formatNumber(data.value, 'currency') };
            }
            const isValueAboveAverage = data.value > @(ChartData.AverageSpend);
            if (isValueAboveAverage) {
                return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - @(ChartData.AverageSpend), 'currency')} above average spending.` };
            }

            return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(@(ChartData.AverageSpend) - data.value, 'currency')} below average spending.` };
        }
    </script>

    <!-- tab: ChartData.cs -->
    namespace ASP_NET_Core.Models;
    static class ChartData {
        public static List<ChartDataPoint> ChartDataPoints = [
            // ...
        ];

        public static double AverageSpend => ChartDataPoints.Average(p => p.ActualSpend);
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart [dataSource]="chartData" >
        <dxo-chart-tooltip
            [enabled]="true"
            [customizeTooltip]="customizeTooltip"
        ></dxo-chart-tooltip>
    </dx-chart>

    <!-- tab: app.component.ts -->
    import { formatNumber } from 'devextreme/localization';

    export class AppComponent {
        averageSpend = this.calculateAverageSpend();

        calculateAverageSpend(): number {
            const sum = this.chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

            return sum / this.chartData.length;
        }

        customizeTooltip: (data: { value: number; seriesName: string }) => { text: string } = (data: { value: number; seriesName: string }) => {
            if (data.seriesName === 'Budget') {
                return { text: formatNumber(data.value, 'currency') };
            }
            const isValueAboveAverage = data.value > this.averageSpend;
            if (isValueAboveAverage) {
                return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - this.averageSpend, 'currency')} above average spending.` };
            }

            return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(this.averageSpend - data.value, 'currency')} below average spending.` };
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { formatNumber } from 'devextreme/localization';

    function calculateAverageSpend() {
        const sum = chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

        return sum / chartData.length;
    }

    const averageSpend = ref(calculateAverageSpend());

    function customizeTooltip(data: { value: number; seriesName: string }) {
        if (data.seriesName === 'Budget') {
            return { text: formatNumber(data.value, 'currency') };
        }
        const isValueAboveAverage = data.value > calculateAverageSpend();
        if (isValueAboveAverage) {
            return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - averageSpend.value, 'currency')} above average spending.` };
        }

        return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(averageSpend.value - data.value, 'currency')} below average spending.` };
    }
    </script>

    <template>
        <div>
            <DxChart :data-source="chartData" >
                <DxTooltip
                    :enabled="true"
                    :customize-tooltip="customizeTooltip"
                />
            </DxChart>
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { formatNumber } from 'devextreme/localization';

    function calculateAverageSpend(): number {
        const sum = chartData.reduce((accumulator, { actualSpend }) => accumulator + actualSpend, 0);

        return sum / chartData.length;
    }

    const averageSpend = calculateAverageSpend();

    function customizeTooltip(data: { value: number; seriesName: string }): { text: string } {
        if (data.seriesName === 'Budget') {
            return { text: formatNumber(data.value, 'currency') };
        }
        const isValueAboveAverage = data.value > calculateAverageSpend();
        if (isValueAboveAverage) {
            return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(data.value - averageSpend, 'currency')} above average spending.` };
        }

        return { text: `${formatNumber(data.value, 'currency')}\n${formatNumber(averageSpend - data.value, 'currency')} below average spending.` };
    }

    function App(): JSX.Element {
        return (
            <>
                <Chart dataSource={chartData} >
                    <Tooltip
                        enabled={true}
                        customizeTooltip={customizeTooltip}
                    />
                </Chart>
            </>
        );
    }

    export default App;

---