$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'cornflowerblue' },
        valueIndicator: { color: 'greenyellow' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                indentFromTick: -20
            }
        },
        value: 53
    });
});