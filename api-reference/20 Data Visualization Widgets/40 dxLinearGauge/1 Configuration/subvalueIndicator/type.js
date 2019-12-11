$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'lightgreen' },
        valueIndicator: { color: 'palegoldenrod' },
        scale: {
            startValue: 0,
            endValue: 1000
        },
        subvalueIndicator: {
            type: 'triangleMarker'
        },
        value: 439.92,
        subvalues: [135.35, 591.5, 942]
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            subvalueIndicator: {
                type: this.value
            }
        });
    });
})