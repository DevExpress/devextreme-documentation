$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'coral' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 100
    });
    
    $('#decrease').click(function () {
        var gauge = $("#circularGaugeContainer").dxCircularGauge("instance");
        var previousValue = gauge.option('value');
        gauge.value(previousValue - 10);
    });

    $('#restore').click(function () {
        var gauge = $("#circularGaugeContainer").dxCircularGauge("instance");
        gauge.value(100);
    });
});