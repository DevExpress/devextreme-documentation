$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'blue' },
        valueIndicator: {
            type: 'rangeBar',
            color: 'firebrick'
        },
        tooltip: { enabled: true },
        value: 78
    });

    $('#enableTooltipCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option('tooltip.enabled', this.checked);
    });
})