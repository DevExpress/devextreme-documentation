$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'firebrick' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 43,
        subvalues: [34.5, 53, 12.34, 84],
        tooltip: {
            enabled: true,
            border: {
                width: 4
            }
        }
    });
});