$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        valueIndicator: { type: 'circle' },
        scale: {
            startValue: 0,
            endValue: 100, 
            minorTick: {
                visible: true,
            },
            minorTickInterval: 2
        },
        value: 56
    });
});