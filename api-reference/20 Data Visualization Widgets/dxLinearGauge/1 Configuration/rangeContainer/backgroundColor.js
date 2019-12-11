$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            minorTick: { visible: true }
        },
        valueIndicator: { type: 'rhombus' },
        rangeContainer: {
            backgroundColor: 'darkseagreen'
        },
        value: 42
    });
})