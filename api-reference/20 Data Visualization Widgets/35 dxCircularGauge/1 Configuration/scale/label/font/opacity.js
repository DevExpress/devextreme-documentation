$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        valueIndicator: { color: 'lightblue' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    opacity: 0.75
                }
            }
        },
        value: 4
    });
});