$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [4, -14.3, 42, 13, -29.1],
        palette: 'Soft Pastel',
        label: {
            format: 'decimal',
            indent: 15,
            font: {
                size: 12,
                weight: 700
            }
        }
    });
});