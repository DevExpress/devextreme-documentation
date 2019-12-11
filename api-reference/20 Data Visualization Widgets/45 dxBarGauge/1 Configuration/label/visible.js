$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-14, 26, 3.14, 19.84, -41.3],
        palette: 'Soft Pastel'
    });

    $('#showLabelsCheckbox').change(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.option({
            label: {
                visible: this.checked
            }
        });
    });
});