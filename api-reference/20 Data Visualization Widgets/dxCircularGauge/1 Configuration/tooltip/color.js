$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'skyblue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 62,
        subvalues: [34.5, 53, 12.34, 84, 73],
        tooltip: {
            enabled: true,
            color: 'powderblue'
        }
    });
});