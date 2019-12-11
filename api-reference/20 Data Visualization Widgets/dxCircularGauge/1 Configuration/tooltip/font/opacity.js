$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'cadetblue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'mediumaquamarine'
        },
        tooltip: {
            enabled: true,
            font: {
                opacity: 0.5
            }
        },
        value: 58
    })
})