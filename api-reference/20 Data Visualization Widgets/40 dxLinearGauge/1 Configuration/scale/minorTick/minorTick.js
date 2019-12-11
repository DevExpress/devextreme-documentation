$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'wheat' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: { color: 'black' },
            minorTick: {
                visible: true,
                color: 'black',
                length: 1,
                tickInterval: 5
            }
        },
        value: 456
    });
});