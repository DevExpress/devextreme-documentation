var assignValues = function () {
    var gauge = $("#barGaugeContainer").dxBarGauge('instance');
    gauge.option({
        values: [21.3, 14.8, 84.9, 45.2, 7]
    });
};

$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 100,
        palette: 'Bright',
        loadingIndicator: {
            show: true
        }
    });

    $('#showLoadingIndicatorButton').click(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var gauge = $('#barGaugeContainer').dxBarGauge('instance');
        gauge.hideLoadingIndicator();
    });
    
    setTimeout(assignValues, 5000);
});