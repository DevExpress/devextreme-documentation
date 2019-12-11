$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: { startValue: 0, endValue: 100 },
        valueIndicator: {
            color: 'dodgerblue'
        },
        value: 0
    });

    var moveClockwise = true;
    $('#changeValueButton').click(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        var val = gauge.value();
        var scaleStart = gauge.option('scale.startValue');
        var scaleEnd = gauge.option('scale.endValue');
        if (val == scaleStart) { moveClockwise = true };
        if (val == scaleEnd) { moveClockwise = false };
        moveClockwise ? val++ : val--;
        gauge.value(val);
    });
})