$(function () {
    $("#barGaugeContainer").dxBarGauge({
        values: [7, 14.8, 67.9, 30.9, 85.1, 45.2],
        palette: 'Bright',
        geometry: {
            startAngle: 0,
            endAngle: -90
        }
    });
});