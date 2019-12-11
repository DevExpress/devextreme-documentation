$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        valueIndicator: {
            type: 'twoColorNeedle'
        },
        value: 42
    });

    $("#getSVG").click(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        $('#widgetSVG').html(gauge.svg());
    });
})