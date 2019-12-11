$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        valueIndicator: {
            type: 'rectangle'
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            valueIndicator: {
                type: this.value
            }
        });
    });
})