$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.3, 14.8, -30.91, 45.2, 7],
        palette: 'Harmony Light',
        animation: { enabled: false },
        tooltip: {
            enabled: true,
            border: {
                visible: true,
                color: 'blue'
            }
        }
    });

    $('#showTooltipBorderCheckbox').change(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.option({
            tooltip: {
                border: { visible: this.checked }
            }
        });
    });
});