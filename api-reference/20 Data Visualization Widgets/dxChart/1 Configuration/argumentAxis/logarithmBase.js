var dataSource = [
    { pressure: 0.00002, level: 0 },
    { pressure: 632, level: 150 }
];

$(function () {
    $("#chartContainer").dxChart({
        dataSource: dataSource,
        commonSeriesSettings: {
            argumentField: 'pressure'
        },
        series: [{ valueField: 'level' }],
        legend: { visible: false },
        argumentAxis: {
            type: 'logarithmic',
            logarithmBase: 10,
            tickInterval: 1,
            grid: { visible: true },
            title: 'Sound pressure, Pa'
        },
        valueAxis: {
            title: 'Sound pressure level, dB'
        }
    });

    $("input[name='logarithmBase']").change(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.option({
            argumentAxis: { logarithmBase: +$(this).val() }
        })
    });
});