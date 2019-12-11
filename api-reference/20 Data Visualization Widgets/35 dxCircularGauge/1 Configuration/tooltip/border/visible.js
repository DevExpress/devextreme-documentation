$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'midnightblue' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        animation: { enabled: false },
        value: 43,
        subvalues: [34.5, 53, 12.34],
        tooltip: {
            enabled: true,
            border: {
                visible: true,
                color: 'blue'
            }
        }
    });

    $('#showTooltipBorderCheckbox').change(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        gauge.option({
            tooltip: {
                border: { visible: this.checked }
            }
        });
    });
});