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
            }
        },
        title: 'Population by Continent',
        pointSelectionMode: 'multiple',
        onPointClick: function (info) {
            var clickedPoint = info.target;
            var series = clickedPoint.series;
            $.each(series.getAllPoints(), function (_, point) {
                if (point.originalValue >= 1000000000) {
                    point.fullState & 2 ? series.deselectPoint(point) : series.selectPoint(point);
                }
            })
        }
    });
});