var dataSource = [
    { source: 'Auditory threshold', pressure: 0.00002 },
    { source: 'Normal conversation', pressure: 0.002 },
    { source: 'TV', pressure: 0.02 },
    { source: 'Traffic on a busy roadway', pressure: 0.2 },
    { source: 'Non-electric chainsaw', pressure: 6.3 },
    { source: 'Threshold of pain', pressure: 63.2 },
    { source: 'Jet engine at 30 m', pressure: 632 }
];

$(function () {
    $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [{ argumentField: 'source', valueField: 'pressure' }],
        legend: { visible: false },
        argumentAxis: {
                discreteAxisDivisionMode: 'crossLabels'
        },
        valueAxis: {
            type: 'logarithmic',
            logarithmBase: 10,
            tickInterval: 1
        }
    });

    $("input[name='logarithmBase']").change(function () {
        var chart = $('#chartContainer').dxPolarChart('instance');
        chart.option({
            valueAxis: { logarithmBase: +$(this).val() }
        })
    });
});