$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-28.3, 35.8, -30.91, 46.2, 3],
        palette: 'Pastel',
        tooltip: {
            enabled: true,
            color: 'powderblue'
        }
    });
});