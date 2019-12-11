$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'deepskyblue' },
        valueIndicator: { color: 'powderblue' },
        scale: {
            startValue: 0,
            endValue: 1,
            label: {
                visible: true
            }
        },
        value: 0.31
    });

    $('#visibleScaleLabelsCheckbox').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            scale: {
                label: { visible: this.checked }
            }
        });
    });
});