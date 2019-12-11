$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: { startValue: 0, endValue: 100 },
        value: 80
    });

    $('#changeContainerSizeButton').click(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        if ($('#circularGaugeContainer').height() > 300 || $('#circularGaugeContainer').width() > 300) {
            $('#circularGaugeContainer').height(300);
            $('#circularGaugeContainer').width(300);
        } else {
            $('#circularGaugeContainer').height(400);
            $('#circularGaugeContainer').width(400);
        }
        gauge.render();
    });
})