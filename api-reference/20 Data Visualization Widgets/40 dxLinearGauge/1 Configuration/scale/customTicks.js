$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'orangered' },
        valueIndicator: { color: 'palegoldenrod' },
        scale: {
            startValue: 0,
            endValue: 100,
            customTicks: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        },
        value: 55
    });
});