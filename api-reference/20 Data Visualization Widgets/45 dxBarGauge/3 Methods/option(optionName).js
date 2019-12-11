$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.3, 14.8, -30.9, 45.2, 7, -5.3, -43.1],
        tooltip: {
            enabled: true
        }
    });

    $('#enableTooltipCheckbox').change(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.option({
            tooltip: {
                enabled: this.checked
            }
        });
        $('#replySpan').html('tooltip | enabled: ' + gauge.option('tooltip.enabled'));
    });
});