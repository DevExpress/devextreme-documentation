$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'steelblue' },
        scale: {
            startValue: 0,
            endValue: 1,
            label: {
                visible: true
            }
        },
        value: 0.43
    });

    $('#visibleScaleLabelsCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            scale: {
                label: { visible: this.checked }
            }
        });
    });
});