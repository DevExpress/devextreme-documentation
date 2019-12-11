$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'darkorchid' },
        valueIndicator: { color: 'plum' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed',
            subtitle: {
                text: '(in rotations per minute)'
            }
        }
    });
})