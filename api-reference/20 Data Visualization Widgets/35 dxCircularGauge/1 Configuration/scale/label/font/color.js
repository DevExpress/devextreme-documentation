$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    color: 'royalblue'
                }
            }
        },
        value: 32
    });
});