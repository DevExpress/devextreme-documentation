$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 1000000
        },
        value: 456321
    });
});