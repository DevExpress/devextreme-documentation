$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'palevioletred' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'pink'
        },
        tooltip: {
            enabled: true,
            font: {
                weight: 700
            }
        },
        value: 75.43
    })
})