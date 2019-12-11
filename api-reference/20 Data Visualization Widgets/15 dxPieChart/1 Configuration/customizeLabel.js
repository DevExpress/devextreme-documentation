var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'continent',
            valueField: 'population',
            type: 'doughnut',
            label: {
                visible: true,
                connector: { visible: true },
                format: {
                    type: 'largeNumber',
                    precision: 2
                }
            }
        },
        title: 'Population by Continent',
        palette: 'Ocean',
        customizeLabel: function (point) {
            if (point.value > 500000000) {
                return {
                    backgroundColor: 'deepskyblue'
                }
            }
        }
    });
});