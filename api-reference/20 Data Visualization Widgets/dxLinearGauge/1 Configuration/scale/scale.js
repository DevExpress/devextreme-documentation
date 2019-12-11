$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { type: 'circle' },
        scale: {
            startValue: 0,
            endValue: 100,
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