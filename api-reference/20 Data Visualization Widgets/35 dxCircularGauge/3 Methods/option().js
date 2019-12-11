$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        rangeContainer: { backgroundColor: 'blue' },
        valueIndicator: {
            type: 'rangeBar',
            color: 'green'
        },
        tooltip: { enabled: true },
        value: 42
    });

    $('#enableTooltipCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            tooltip: {
                enabled: this.checked
            }
        });
        $('#replySpan').html('tooltip | enabled: ' + gauge.option().tooltip.enabled);
    });
})