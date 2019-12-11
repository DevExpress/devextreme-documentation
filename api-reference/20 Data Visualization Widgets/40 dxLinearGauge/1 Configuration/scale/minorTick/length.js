$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'skyblue' },
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