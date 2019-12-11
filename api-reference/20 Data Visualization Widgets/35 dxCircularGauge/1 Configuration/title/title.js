$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'deepskyblue' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: 'Fan Speed (in rpm)'
    });
})