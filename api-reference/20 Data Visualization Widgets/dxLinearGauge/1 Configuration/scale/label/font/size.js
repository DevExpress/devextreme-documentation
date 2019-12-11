$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        valueIndicator: { color: 'lightblue' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    size: 16
                }
            }
        },
        value: 52
    });
});