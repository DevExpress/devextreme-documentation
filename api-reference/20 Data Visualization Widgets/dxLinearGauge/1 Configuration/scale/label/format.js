$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'steelblue' },
        valueIndicator: { color: 'mediumturquoise' },
        scale: {
            startValue: 0,
            endValue: 1,
            label: {
                format: 'percent'
            }
        },
        value: 0.86
    });
});