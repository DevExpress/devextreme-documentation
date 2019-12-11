$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [6, -14.3, 31, 13, -34.1],
        palette: 'Ocean',
        barSpacing: 2
    });
});