$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: { startValue: 0, endValue: 100 },
        value: 80
    });

    $('#changeContainerSizeButton').click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        if ($('#linearGaugeContainer').height() > 100 || $('#linearGaugeContainer').width() > 500) {
            $('#linearGaugeContainer').height(100);
            $('#linearGaugeContainer').width(500);
        } else {
            $('#linearGaugeContainer').height(150);
            $('#linearGaugeContainer').width(700);
        }
        gauge.render();
    });
})