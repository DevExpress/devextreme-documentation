$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'peachpuff' },
        valueIndicator: { color: 'palegoldenrod' },
        value: 25,
        animation: {
            enabled: true
        }
    });
    
    $('#animationEnabledCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            animation: { enabled: this.checked }
        });
    });
    
    $("input[name='newValue']").change(function () {
        var newValue = +$(this).val();
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.value(newValue);
    });
});