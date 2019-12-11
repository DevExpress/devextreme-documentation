$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'orangered' },
        valueIndicator: { color: 'silver' },
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                visible: true
            }
        },
        value: 55
    });

    $('#showMajorTicksCheckbox').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            scale: {
                tick: {
                    visible: this.checked
                }
            }
        });
    });
});