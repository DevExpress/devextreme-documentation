$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'coral' },
        scale: {
            label: { font: { color: 'chocolate' } }
        },
        valueIndicator: { color: 'salmon' },
        value: 42,
        size: {
            height: 100,
            width: 500
        }
    });
});