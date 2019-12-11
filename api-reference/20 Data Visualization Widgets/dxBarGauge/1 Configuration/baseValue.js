$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.3, 14.8, -30.9, 45.2],
        palette: 'Violet',
        baseValue: 10
    });
});