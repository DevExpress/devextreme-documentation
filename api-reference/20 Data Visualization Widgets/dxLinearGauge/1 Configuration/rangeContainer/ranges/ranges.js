$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        valueIndicator: { type: 'rhombus' },
        rangeContainer: {
            ranges: [
                { startValue: 0, endValue: 20, color: 'dodgerblue' },
                { startValue: 20, endValue: 40, color: 'lightskyblue' },
                { startValue: 40, endValue: 60, color: 'yellow' },
                { startValue: 60, endValue: 80, color: 'orange' },
                { startValue: 80, endValue: 100, color: 'firebrick' }
            ]
        },
        value: 38
    });
})