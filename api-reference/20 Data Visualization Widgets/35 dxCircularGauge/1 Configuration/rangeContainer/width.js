$(function() {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100
        },
        rangeContainer: {
            backgroundColor: 'orange',
            orientation: 'center',
            width: 15
        },
        value: 53.2
    });
})