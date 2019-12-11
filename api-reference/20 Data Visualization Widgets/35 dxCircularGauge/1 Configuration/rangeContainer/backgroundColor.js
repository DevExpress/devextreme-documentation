$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            minorTick: { visible: true }
        },
        rangeContainer: {
            backgroundColor: 'darkseagreen'
        },
        value: 42
    });
})