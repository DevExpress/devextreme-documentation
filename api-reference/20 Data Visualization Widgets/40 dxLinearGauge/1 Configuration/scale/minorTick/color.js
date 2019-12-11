$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'mediumaquamarine' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: { color: 'black' },
            minorTick: {
                visible: true,
                color: 'dodgerblue'
            }
        },
        value: 321
    });
});