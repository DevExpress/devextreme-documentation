$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 100,
        values: [34.5, 53, 12.34, 84],
        palette: 'Ocean',
        tooltip: {
            enabled: true,
            border: {
                color: 'forestgreen'
            }
        }
    });
});