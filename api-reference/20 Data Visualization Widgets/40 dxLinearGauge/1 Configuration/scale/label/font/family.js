$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'turquoise' },
        valueIndicator: { color: 'lightblue' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                font: {
                    family: 'Zapf-Chancery, cursive'
                }
            }
        },
        value: 87
    });
});