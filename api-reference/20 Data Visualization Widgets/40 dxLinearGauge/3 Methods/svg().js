$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        valueIndicator: {
            type: 'rectangle'
        },
        value: 42
    });

    $("#getSVG").click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        $('#widgetSVG').html(gauge.svg());
    });
})