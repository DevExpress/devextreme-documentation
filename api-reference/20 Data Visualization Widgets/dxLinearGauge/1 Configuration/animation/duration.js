$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'peachpuff' },
        valueIndicator: { color: 'palegoldenrod' },
        value: 32,
        animation: {
            duration: 2000
        }
    });

    $("input[name='newValue']").change(function () {
        var newValue = +$(this).val();
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.value(newValue);
    });
});