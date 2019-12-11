var dataSource = [
    { year: -631166400000, population: 546 },
    { year: 2524593600000, population: 650 },
    { year: 2208974400000, population: 680 },
    { year: 1893441600000, population: 704 },
    { year: 1577822400000, population: 721 },
    { year: 1262289600000, population: 728 },
    { year: 946670400000, population: 730 },
    { year: 631137600000, population: 721 },
    { year: 315518400000, population: 694 },
    { year: -14400000, population: 656 },
    { year: -315633600000, population: 605 }
];

$(function () {
    $("#pieChartContainer").dxPieChart({
        dataSource: dataSource,
        series: {
            argumentField: 'year',
            valueField: 'population',
            argumentType: 'datetime'
        },
        tooltip: {
            enabled: true,
            argumentFormat: 'year',
            customizeTooltip: function (point) {
                return {
                    text: point.valueText + ' mln in ' + point.argumentText
                };
            }
        },
        legend: { visible: false },
        title: 'Population in Europe'
    });
});

