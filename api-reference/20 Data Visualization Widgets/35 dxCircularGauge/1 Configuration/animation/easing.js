$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'peachpuff' },
        valueIndicator: { color: 'palegoldenrod' },
        value: 25,
        animation: {
            easing: 'easeOutCubic'
        }
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            animation: { easing: this.value }
        });
    });

    $("input[name='newValue']").change(function () {
        var newValue = +$(this).val();
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.value(newValue);
    });
});