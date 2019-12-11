$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'coral' },
        valueIndicator: { color: 'palegoldenrod' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 100
    });
	
    $('#decrease').click(function () {
        var gauge = $("#linearGaugeContainer").dxLinearGauge("instance");
        var previousValue = gauge.option('value');
        gauge.value(previousValue - 10);
    });

    $('#restore').click(function () {
        var gauge = $("#linearGaugeContainer").dxLinearGauge("instance");
        gauge.value(100);
    });
});