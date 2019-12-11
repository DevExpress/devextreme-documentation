$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'lightgreen' },
        valueIndicator: { type: 'circle', color: 'limegreen' },
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