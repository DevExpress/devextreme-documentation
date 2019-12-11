$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'darkorchid' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 43,
        subvalues: [34.5, 53, 12.34],
        tooltip: {
            enabled: true,
            border: {
                opacity: 0.8,
                width: 2,
                color: 'orchid'
            }
        }
    });
});