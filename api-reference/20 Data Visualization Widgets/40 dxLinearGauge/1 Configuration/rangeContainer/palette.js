$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 100,
            tick: {
                visible: true,
                color: 'black'
            },
            minorTick: {
                visible: true,
                color: 'black'
            }
        },
        rangeContainer: {
            offset: 5,
            palette: 'Default',
            ranges: [
                { startValue: 0, endValue: 20 },
                { startValue: 20, endValue: 40 },
                { startValue: 40, endValue: 60 },
                { startValue: 60, endValue: 80 },
                { startValue: 80, endValue: 100 }
            ]
        },
        value: 42
    });

    $('#dropdownListSelector').change(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.option({
            rangeContainer: {
                palette: this.value
            }
        });
    });
});