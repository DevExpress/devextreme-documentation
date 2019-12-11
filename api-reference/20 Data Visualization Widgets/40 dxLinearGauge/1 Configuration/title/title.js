$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'deepskyblue' },
        valueIndicator: { color: 'paleturquoise' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: 'Fan Speed (in rpm)'
    });
})