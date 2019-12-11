$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'blue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        valueIndicator: {
            type: 'rangeBar',
            color: 'green'
        },
        tooltip: {
            enabled: true
        },
        value: 42
    });

    $('#enableTooltipCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            tooltip: {
                enabled: this.checked
            }
        });
    });
})