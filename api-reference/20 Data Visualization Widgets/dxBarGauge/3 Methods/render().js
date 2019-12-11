$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-14, 26, 3.14, 19.84, -41.3],
        palette: 'Bright'
    });

    $('#changeContainerSizeButton').click(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        if ($('#barGaugeContainer').height() > 300 || $('#barGaugeContainer').width() > 300) {
            $('#barGaugeContainer').height(300);
            $('#barGaugeContainer').width(300);
        } else {
            $('#barGaugeContainer').height(400);
            $('#barGaugeContainer').width(400);
        }
        gauge.render();
    });
});