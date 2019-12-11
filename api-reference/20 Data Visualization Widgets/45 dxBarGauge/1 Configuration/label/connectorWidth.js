$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 100,
        values: [4, 14.3, 42, 57, 93.112],
        palette: 'Ocean',
        label: {
            connectorWidth: 1
        }
    });
});