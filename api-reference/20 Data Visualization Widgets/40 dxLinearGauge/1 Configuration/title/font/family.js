$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'lightslategray' },
        valueIndicator: { color: 'paleturquoise' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed (in rpm)',
            font: {
                family: 'Zapf-Chancery, cursive'
            }
        }
    });
})