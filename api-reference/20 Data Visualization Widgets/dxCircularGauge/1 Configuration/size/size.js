$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'coral' },
        scale: {
            label: { font: { color: 'chocolate' } }
        },
        valueIndicator: { color: 'salmon' },
        value: 42,
        size: {
            height: 300,
            width: 300
        }
    });
});