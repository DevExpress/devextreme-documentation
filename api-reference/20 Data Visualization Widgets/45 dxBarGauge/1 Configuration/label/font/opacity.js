$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [4, -14.3, 42, 13, -29.1],
        palette: 'Ocean',
        label: {
            font: {
                opacity: 0.8
            }
        }
    });
});