$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'peachpuff' },
        valueIndicator: { color: 'palegoldenrod' },
        value: 32,
        animation: {
            duration: 2000
        }
    });

    $("input[name='newValue']").change(function () {
        var newValue = +$(this).val();
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.value(newValue);
    });
});