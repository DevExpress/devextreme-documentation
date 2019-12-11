$(function () {
    $("#circularGaugeContainer").dxCircularGauge({
        rangeContainer: { backgroundColor: 'white' },
        scale: {
            startValue: 0,
            endValue: 1000,
            tick: {
                color: 'black',
                width: 4
            }
        },
        value: 632
    });
});