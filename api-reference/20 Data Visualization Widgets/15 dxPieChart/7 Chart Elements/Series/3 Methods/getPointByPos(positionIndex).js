var dataSource = [
    { continent: 'Africa', population: 1022234000 },
    { continent: 'Asia', population: 4164252000 },
    { continent: 'Australia', population: 29127000 },
    { continent: 'Europe', population: 738199000 },
    { continent: 'Antarctica', population: 4490 },
    { continent: 'North America', population: 542056000 },
    { continent: 'South America', population: 392555000 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            type: 'doughnut',
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
            minSegmentSize: 5
        },
        title: 'Population by Continent'
    });

    $("input[name='seriesIndex']").change(function () {
        var chosenIndex = +$(this).val();
        var pieChart = $('#pieChartContainer').dxPieChart('instance');
        pieChart.clearSelection();
        pieChart.getAllSeries()[0].getPointByPos(chosenIndex).select();
    });
});