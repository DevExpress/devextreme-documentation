$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'peachpuff' },
        valueIndicator: { color: 'palegoldenrod' },
        value: 25,
        animation: {
            enabled: true
        }
    });
    
    $('#animationEnabledCheckbox').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            animation: { enabled: this.checked }
        });
    });
    
    $("input[name='newValue']").change(function () {
        var newValue = +$(this).val();
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.value(newValue);
    });
});