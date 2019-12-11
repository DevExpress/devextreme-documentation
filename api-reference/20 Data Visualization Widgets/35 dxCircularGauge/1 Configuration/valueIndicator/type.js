$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100
        },
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