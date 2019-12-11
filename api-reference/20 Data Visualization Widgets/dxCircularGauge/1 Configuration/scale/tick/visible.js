$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'orangered' },
        scale: {
            startValue: 0,
            endValue: 100,
        },
        value: 55
    });

    $('#showMajorTicksCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            scale: {
                tick: {
                    visible: this.checked
                }
            }
        });
    });
});