$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [1.3, -14.8, 30.9, -45.2, -7],
        palette: 'Violet',
        tooltip: {
            enabled: true,
            border: {
                color: 'violet',
                opacity: 0.5
            }
        }
    });
});