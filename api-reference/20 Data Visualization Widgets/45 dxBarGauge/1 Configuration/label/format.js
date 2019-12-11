$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [4, -14.3, 41, 13, -29.1],
        palette: 'Harmony Light',
        label: {
            format: {
                type: 'fixedPoint',
                precision: 2
            }
        }
    });
});