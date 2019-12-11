$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            tick: { color: 'black' }
        },
        geometry: { orientation: 'horizontal' },
        valueIndicator: { type: 'rectangle', color: 'royalblue' },
        rangeContainer: {
            backgroundColor: 'orange',
            verticalOrientation: 'bottom'
        },
        value: 81
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            rangeContainer: {
                verticalOrientation: this.value
            }
        });
    });
})