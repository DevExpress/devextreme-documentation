$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'lightsteelblue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'blanchedalmond'
        },
        tooltip: {
            enabled: true,
            font: {
                color: 'deepskyblue',
                family: 'Zapf-Chancery, cursive',
                size: 20,
                weight: 700
            }
        },
        value: 42.73
    })
})