$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'steelblue' },
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