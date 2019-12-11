$(function() {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'lightgreen' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        subvalueIndicator: {
            type: 'triangleMarker',
            color: 'forestgreen',
            length: 20
        },
        value: 439.92,
        subvalues: [135.35, 591.5, 942]
    });
})