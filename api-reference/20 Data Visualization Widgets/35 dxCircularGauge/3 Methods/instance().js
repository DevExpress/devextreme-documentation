$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        valueIndicator: {
            type: 'rectangleNeedle'
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            valueIndicator: {
                type: this.value
            }
        });
    });
})