var dataSource = [
    { arg: 10, y: -12 },
    { arg: 20, y: -32 },
    { arg: 40, y: -20 },
    { arg: 50, y: -39 },
    { arg: 60, y: -10 },
    { arg: 75, y: 10 },
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'arg'
        },
        series: [
            { valueField: 'y', name: 'value' },
        ],
        legend: { visible: false },
        tooltip: {
            enabled: true
        }
    });

    var clickCounter = 0;
    $('#tooltipShow').click(function () {
        var chart = $("#chartContainer").dxChart("instance");
        var series = chart.getSeriesByName('value');
        var points = series.getAllPoints();
        if (clickCounter == dataSource.length)
            clickCounter = 0;
        points[clickCounter].showTooltip();
        clickCounter++;
    });
});