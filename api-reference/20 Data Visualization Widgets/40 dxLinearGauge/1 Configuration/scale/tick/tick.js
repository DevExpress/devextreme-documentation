$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'palegoldenrod' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: {
                color: 'black',
                length: 10
            },
            tickInterval: 50
        },
        value: 465
    });
});