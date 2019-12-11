$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    size: 16
                }
            }
        },
        value: 32
    });
});