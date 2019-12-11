$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'white' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: { color: 'black' },
            minorTick: {
                visible: true,
                color: 'black',
                length: 2
            }
        },
        value: 441
    });
});