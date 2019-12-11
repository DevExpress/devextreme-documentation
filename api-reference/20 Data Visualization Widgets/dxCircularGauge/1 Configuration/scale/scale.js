$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'white' },
        scale: {
            startValue: 0,
            endValue: 200,
            tick: {
                color: 'black'
            },
            minorTick: {
                visible: true,
                color: 'black'
            },
            label: {
                format: 'currency'
            }
        },
        value: 45
    });
});