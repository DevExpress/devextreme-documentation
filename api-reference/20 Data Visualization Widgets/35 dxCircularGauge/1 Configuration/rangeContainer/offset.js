$(function() {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                visible: true,
                color: 'black'
            },
            minorTick: {
                visible: true,
                color: 'black'
            }
        },
        rangeContainer: {
            offset: 5
        },
        value: 42
    });
})