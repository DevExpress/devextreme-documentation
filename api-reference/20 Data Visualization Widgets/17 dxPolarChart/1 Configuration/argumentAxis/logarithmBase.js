var dataSource = [
    { pressure: 0.00002, level: 0 },
    { pressure: 632, level: 150 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: [
            { arg: 1, val: 2 },
            { arg: 3, val: 4 },
            { arg: 6, val: 8 },
            { arg: 9, val: 16 },
            { arg: 12, val: 32 },
            { arg: 15, val: 64 },
            { arg: 18, val: 128 },
            { arg: 21, val: 256 },
            { arg: 24, val: 512 }
                         
        ],
        series: [{
            type: "area",
            label: { visible: true },
            border: { visible: true }
        }],
        argumentAxis: {
            type: "logarithmic"
        },
        valueAxis: {
            type: "logarithmic",
            logarithmBase: 2,
            valueMarginEnabled: false
        },
        legend: { visible: false }
    });

    $("input[name='logarithmBase']").change(function () {
        var chart = $('#chartContainer').dxPolarChart('instance');
        chart.option({
            argumentAxis: { logarithmBase: +$(this).val() }
        })
    });
});