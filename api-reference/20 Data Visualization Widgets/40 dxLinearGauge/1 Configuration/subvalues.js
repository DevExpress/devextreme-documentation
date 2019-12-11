$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'coral' },
        valueIndicator: { color: 'khaki' },
        value: 43,
        subvalues: [34.5, 53, 12.34]
    });
});