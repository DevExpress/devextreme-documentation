$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'orangered' },
        valueIndicator: { color: 'burlywood' },
        scale: {
            startValue: 0,
            endValue: 100,
            minorTick: {
                visible: true
            }
        },
        value: 34
    });

    $('#showMinorTicksCheckbox').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            scale: {
                minorTick: {
                    visible: this.checked
                }
            }
        });
    });
});