var assignValues = function () {
    var gauge = $("#linearGaugeContainer").dxLinearGauge('instance');
    gauge.option({
        value: 24,
        subvalues: [27, 44]
    });
};

$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        scale: {
            startValue: 0,
            endValue: 60,
            tickInterval: 10
        },
        rangeContainer: {
            backgroundColor: 'none',
            ranges: [
                { startValue: 0, endValue: 20, color: '#A6C567' },
                { startValue: 20, endValue: 40, color: '#FCBB69' },
                { startValue: 40, endValue: 60, color: '#E19094' }
            ]
        },
        loadingIndicator: {
            show: true
        }
    });

    $('#showLoadingIndicatorButton').click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.showLoadingIndicator();
    });

    $('#hideLoadingIndicatorButton').click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        gauge.hideLoadingIndicator();
    });
    
    setTimeout(assignValues, 5000);
});