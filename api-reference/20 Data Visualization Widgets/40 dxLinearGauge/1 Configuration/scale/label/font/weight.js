$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        valueIndicator: { color: 'lightblue' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    weight: 700
                }
            }
        },
        value: 67
    });
});