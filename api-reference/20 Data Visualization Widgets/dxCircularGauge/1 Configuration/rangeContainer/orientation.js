$(function() {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                color: 'black'
            }
        },
        rangeContainer: {
            backgroundColor: 'greenyellow',
            orientation: 'outside'
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            rangeContainer: {
                orientation: this.value
            }
        });
    });
})