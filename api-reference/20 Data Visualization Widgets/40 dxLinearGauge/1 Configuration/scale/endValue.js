$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        valueIndicator: { color: 'yellowgreen' },
        scale: {
            startValue: 0,
            endValue: 1000000
        },
        value: 123321
    });
});