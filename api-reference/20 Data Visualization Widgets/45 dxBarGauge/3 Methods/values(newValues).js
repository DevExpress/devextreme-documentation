$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 100,
        values: [0, 0, 0],
        animation: { duration: 300 },
        label: {
            format: 'decimal'
        },
        palette: 'Violet'
    });

    $('#increaseValueButton').click(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        var values = gauge.values();
        var rand = Math.floor(Math.random() * values.length);
        values[rand]++;
        var scaleEnd = gauge.option('endValue');
        if (values[rand] == scaleEnd) {
            gauge.option({
                backgroundColor: 'red'
            });
            $(this).attr('disabled', 'disabled');
        };
        gauge.values(values);
    });
});