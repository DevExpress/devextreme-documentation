$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'palevioletred' },
        geometry: { orientation: 'vertical' },
        scale: {
            horizontalOrientation: 'right',
            tick: {
                color: 'black'
            }
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            scale: {
                horizontalOrientation: this.value
            }
        });
    });
})