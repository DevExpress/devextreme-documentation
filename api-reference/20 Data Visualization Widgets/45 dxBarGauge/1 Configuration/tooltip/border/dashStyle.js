$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.312, 14.833, -30.91, 45.2, 7],
        palette: 'Violet',
        tooltip: {
            enabled: true,
            border: {
                color: 'purple',
                dashStyle: 'longDash'
            }
        }
    });
});