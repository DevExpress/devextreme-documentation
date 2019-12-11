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
            { valueField: 'y' },
        ],
        legend: { visible: false },
        tooltip: {
            enabled: true
        },
        onTooltipShown: function (info) {
            var point = info.target;
            setTimeout(function () {
                point.hideTooltip()
            }, 1000)
        }
    });
});