$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'darkturquoise' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'darkseagreen'
        },
        tooltip: {
            enabled: true,
            font: {
                family: 'Zapf-Chancery, cursive'
            }
        },
        value: 15.73
    })
})