$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'blue' },
        valueIndicator: {
            type: 'rangeBar',
            color: 'palevioletred'
        },
        tooltip: {
            enabled: true,
            arrowLength: 5
        },
        value: 34
    });

    $('#changeTooltipCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        var tooltipArrow = gauge.option('tooltip.arrowLength');
        gauge.option({
            tooltip: {
                enabled: this.checked,
                arrowLength: tooltipArrow + 10
            }
        });
    });
})