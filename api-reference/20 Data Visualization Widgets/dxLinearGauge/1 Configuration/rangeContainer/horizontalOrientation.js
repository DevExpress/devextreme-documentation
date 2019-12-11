$(function() {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            tick: { color: 'black' }
        },
        geometry: { orientation: 'vertical' },
        valueIndicator: { type: 'rectangle', color: 'royalblue' },
        rangeContainer: {
            backgroundColor: 'lightskyblue',
            horizontalOrientation: 'right'
        },
        value: 81
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            rangeContainer: {
                horizontalOrientation: this.value
            }
        });
    });
})