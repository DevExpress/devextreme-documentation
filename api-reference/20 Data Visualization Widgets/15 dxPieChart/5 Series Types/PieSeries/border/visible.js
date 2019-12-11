var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population',
            label: {
                visible: true,
                format: {
                    type: 'largeNumber',
                    precision: 2
                },
                connector: { visible: true }
            },
            border: { visible: true }
        },
        legend: {
            horizontalAlignment: 'center',
            verticalAlignment: 'bottom'
        },
        title: 'Population by Continent',
        palette: 'Soft Pastel'
    });

    $('#visibleBorderCheckbox').change(function () {
        var pieChart = $('#pieChartContainer').dxPieChart('instance');
        pieChart.option({
            series: {
                border: { visible: this.checked }
            }
        });
    });
});