$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    weight: 700
                }
            }
        },
        value: 32
    });
});