var dataSource = [
    { arg: 0, val: 0 },
    { arg: 720, val: 2 }
];

$(function() {
    var polarChartInstance = $("#chartContainer").dxPolarChart({
        dataSource: dataSource,
        series: [
            { type: "line", valueField: "val" }
        ],
        commonSeriesSettings: { closed: false },
        argumentAxis: {
            inverted: true,
            startAngle: 90,
            tickInterval: 45,
            period: 360
        },
        valueAxis: { tickInterval: 0.5 },
        title: {
            text: 'Archimedean Spiral',
            horizontalAlignment: 'center',
            placeholderSize: 60
        },
        legend: { visible: false }
    }).dxPolarChart('instance');

    $("#sliderContainer").dxSlider({
        min: 10,
        max: 100,
        value: 60,
        onValueChanged: function(e) {
            $('#sliderValue').html(e.value);
            polarChartInstance.option({
                title: { placeholderSize: e.value }
            });
        }
    });
});