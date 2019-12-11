$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [34.5, -5, 12.34, -43],
        palette: 'Violet',
        tooltip: {
            enabled: true,
            border: {
                opacity: 0.8,
                width: 2,
                color: 'orchid'
            }
        }
    });
});