$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        values: [-21.3, 14.8, -30.9, 45.2, 7, -5.3, -43.1],
        palette: 'Ocean'
    });

    $("#getSVG").click(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        $('#widgetSVG').html(gauge.svg());
    });
});