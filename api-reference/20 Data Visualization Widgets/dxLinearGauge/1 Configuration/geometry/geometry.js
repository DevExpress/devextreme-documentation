$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        valueIndicator: { color: 'yellowgreen' },
        value: 32,
        geometry: {
            orientation: 'vertical'
        }
    });
});