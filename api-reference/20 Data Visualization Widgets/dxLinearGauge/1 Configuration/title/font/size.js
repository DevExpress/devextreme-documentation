$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        valueIndicator: { color: 'paleturquoise' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed (in rpm)',
            font: {
                size: 25
            }
        }
    });
})