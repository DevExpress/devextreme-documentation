$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-34.5, -23, 12.34, 44, 49.4],
        palette: 'Soft',
        tooltip: {
            enabled: true,
            opacity: 0.45
        }
    });
});