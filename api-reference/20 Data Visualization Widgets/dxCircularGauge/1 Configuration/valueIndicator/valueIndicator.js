$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'twoColorNeedle',
            color: 'palegreen',
            secondColor: 'skyblue',
            width: 3,
            spindleSize: 20,
            spindleGapSize: 15
        },
        value: 89
    })
})