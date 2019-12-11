$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 100,
        values: [21, 14, 30.1, 85.2, 77],
        palette: 'Violet',
        tooltip: {
            enabled: true,
            border: {
                width: 4
            }
        }
    });
});