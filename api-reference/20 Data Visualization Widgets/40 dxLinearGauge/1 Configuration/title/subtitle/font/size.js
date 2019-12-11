$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'burlywood' },
        valueIndicator: { color: 'peachpuff' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        value: 750,
        title: {
            text: 'Fan Speed',
            subtitle: {
                text: '(in rotations per minute)',
                font: {
                    size: 12
                }
            }
        }
    });
})