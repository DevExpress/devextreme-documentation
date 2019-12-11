$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'olivedrab' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: { color: 'black' },
            minorTick: {
                visible: true, 
                color: 'black',
                width: 3
            }
        },
        value: 632
    });
});