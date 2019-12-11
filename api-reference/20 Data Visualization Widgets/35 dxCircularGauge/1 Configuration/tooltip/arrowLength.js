$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'coral' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 43,
        subvalues: [34.5, 53, 12.34],
        tooltip: {
            enabled: true,
            arrowLength: 5
        }
    });
});