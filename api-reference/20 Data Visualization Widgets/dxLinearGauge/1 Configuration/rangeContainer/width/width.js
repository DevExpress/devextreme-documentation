$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            minorTick: { visible: true }
        },
        valueIndicator: { type: 'rhombus', color: 'orangered' },
        rangeContainer: {
            backgroundColor: 'firebrick',
            ranges: [
                { startValue: 0, endValue: 20, color: 'dodgerblue' },
                { startValue: 20, endValue: 40, color: 'lightskyblue' },
                { startValue: 40, endValue: 60, color: 'yellow' },
                { startValue: 60, endValue: 80, color: 'orange' }
            ],
            width: 25
        },
        value: 54
    });
})