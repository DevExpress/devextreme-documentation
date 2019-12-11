$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { type: 'rectangle' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: {
                color: 'black',
                width: 4
            }
        },
        value: 632
    });
});