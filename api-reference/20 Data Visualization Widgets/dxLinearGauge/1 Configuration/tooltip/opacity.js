$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'dodgerblue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 31,
        subvalues: [34.5, 53, 12.34, 84, 73],
        tooltip: {
            enabled: true,
            opacity: 0.45
        }
    });
});