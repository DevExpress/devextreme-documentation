$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'wheat' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                indentFromTick: 20
            }
        },
        value: 32
    });
});