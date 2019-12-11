$(function() {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            orientation: 'outside',
            tick: {
                color: 'black'
            }
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            scale: {
                orientation: this.value
            }
        });
    });
})