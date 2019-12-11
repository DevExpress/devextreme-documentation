$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'palegreen' },
        valueIndicator: { color: 'lightgreen' },
        scale: {
            startValue: 0,
            endValue: 100,
            label: {
                customizeText: function (label) {
                    return label.valueText + ' mph';
                }
            }
        },
        value: 64
    });
});