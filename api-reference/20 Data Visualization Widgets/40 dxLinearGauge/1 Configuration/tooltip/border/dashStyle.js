$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'pink' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 43,
        subvalues: [34.5, 53, 12.34],
        tooltip: {
            enabled: true,
            border: {
                color: 'purple',
                dashStyle: 'longDash'
            }
        }
    });
});