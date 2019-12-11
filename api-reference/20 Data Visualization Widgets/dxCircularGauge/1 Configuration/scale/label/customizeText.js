$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'palegreen' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                customizeText: function (label) {
                    return label.valueText + ' mph';
                }
            }
        },
        value: 32
    });
});