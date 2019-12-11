$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'sandybrown' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'tan'
        },
        tooltip: {
            enabled: true,
            font: {
                size: 30
            }
        },
        value: 81.42
    })
})