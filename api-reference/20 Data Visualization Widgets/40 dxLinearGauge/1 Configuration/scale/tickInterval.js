$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 1000,
            tickInterval: 125
        },
        value: 561
    });
});