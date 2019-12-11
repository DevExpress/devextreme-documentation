$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'mediumseagreen' },
        valueIndicator: { color: 'yellowgreen' },
        value: 32,
        geometry: {
            orientation: 'horizontal'
        }
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            geometry: {
                orientation: this.value
            }
        });
    });
});