$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'lightskyblue' },
        scale: {
            startValue: 0,
            endValue: 2000
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'yellowgreen'
        },
        tooltip: {
            enabled: true,
            format: {
                type: 'thousands',
                precision: 2
            }
        },
        value: 1459
    })
})