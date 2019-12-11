$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        rangeContainer: { backgroundColor: 'white' },
        valueIndicator: { color: 'deepskyblue' },
        scale: {
            verticalOrientation: 'top',
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
                verticalOrientation: this.value
            }
        });
    });
})