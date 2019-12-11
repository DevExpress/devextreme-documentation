var data = [];
var max = 5000;
for (var i = 0; i < max; i++) {
    data.push({ arg: i, val: i + i * (Math.random() - 0.5) });
}

$(function () {
    $("#chartContainer").dxChart({
        dataSource: data,
        series: {},
        argumentAxis: {
            label: { rotate: 90 }
        },
        legend: { visible: false },
        useAggregation: true
    });

    $('#useAggregationCheckbox').change(function () {
        var chart = $('#chartContainer').dxChart('instance');
        chart.option({
            useAggregation: this.checked
        });
    });
});