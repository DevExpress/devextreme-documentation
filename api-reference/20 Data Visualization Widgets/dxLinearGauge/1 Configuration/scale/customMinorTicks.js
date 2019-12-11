$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'wheat' },
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                color: 'black'
            },
            tickInterval: 25,
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