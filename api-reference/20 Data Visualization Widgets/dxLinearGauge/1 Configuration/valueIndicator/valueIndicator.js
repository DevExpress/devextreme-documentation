$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        valueIndicator: {
            type: 'circle',
            color: 'palegreen',
            length: 25
        },
        value: 89
    })
})