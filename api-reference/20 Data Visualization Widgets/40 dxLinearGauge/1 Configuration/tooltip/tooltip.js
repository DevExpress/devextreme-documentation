$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'purple' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'red'
        },
        tooltip: {
            enabled: true,
            format: {
                type: 'currency',
                precision: 2
            },
            font: {
                size: 20,
                weight: 700
            }
        },
        value: 42.73
    })
})