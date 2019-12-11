$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'orangered' },
        scale: {
            startValue: 0,
            endValue: 100,
            minorTick: {
                visible: true
            },
            customMinorTicks: [34, 42, 64, 12, 13],
        },
        value: 34
    });

    $('#showMinorTicksCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            scale: {
                minorTick: {
                    visible: this.checked
                }
            }
        });
    });
});