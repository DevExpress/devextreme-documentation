$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                visible: true,
                color: 'black'
            },
            minorTick: {
                visible: true,
                color: 'black'
            }
        },
        valueIndicator: { type: 'rectangle', color: 'royalblue' },
        rangeContainer: {
            backgroundColor: 'firebrick',
            offset: 5,
            ranges: [
                { startValue: 0, endValue: 20, color: 'dodgerblue' },
                { startValue: 20, endValue: 40, color: 'lightskyblue' },
                { startValue: 40, endValue: 60, color: 'yellow' },
                { startValue: 60, endValue: 80, color: 'orange' }
            ]
        },
        value: 42
    });
})