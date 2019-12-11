$(function () {
    $('#linearGaugeContainer').dxLinearGauge({
        scale: { startValue: 0, endValue: 100 },
        valueIndicator: {
            color: 'chocolate'
        },
        value: 0
    });

    var moveClockwise = true;
    $('#changeValueButton').click(function () {
        var gauge = $('#linearGaugeContainer').dxLinearGauge('instance');
        var val = gauge.value();
        var scaleStart = gauge.option('scale.startValue');
        var scaleEnd = gauge.option('scale.endValue');
        if (val == scaleStart) { moveClockwise = true };
        if (val == scaleEnd) { moveClockwise = false };
        moveClockwise ? val++ : val--;
        gauge.value(val);
    });
})