var values1 = [4, -14.3, 42, 13, -29.1];
var values2 = [-14, 26, 3.14, 19.84, -41.3];

$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: values1,
        palette: 'Bright',
        animation: {
            easing: 'easeOutCubic'
        }
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.option({
            animation: { easing: this.value }
        });
    });

    $("input[name='displayedValues']").change(function () {
        var arrayIndex = +$(this).val();
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        arrayIndex == 1 ? gauge.values(values1) : gauge.values(values2);
    });
});