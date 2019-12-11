$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'white' },
        scale: {
            startValue: 0,
            endValue: 100,
            tickInterval: 25,
            tick: {
                color: 'black'
            },
            minorTick: {
                visible: true,
                color: 'black'
            },
            minorTickInterval: 25,
            customMinorTicks: [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        },
        value: 55
    });
});