$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    color: 'dodgerblue',
                    size: 14,
                    weight: 700,
                    family: 'Zapf-Chancery, cursive'
                }
            }
        },
        value: 32
    });
});