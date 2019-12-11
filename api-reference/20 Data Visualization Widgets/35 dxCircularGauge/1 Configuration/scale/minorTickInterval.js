$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        scale: {
            startValue: 0,
            endValue: 100, 
            minorTickInterval: 2,
            minorTick: {
                visible: true
            }
        },
        value: 56
    });
});