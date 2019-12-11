$(function () {
    $('#circularGaugeContainer').dxCircularGauge({
        scale: { startValue: 0, endValue: 100 },
        subvalueIndicator: {
            color: 'lightgreen'
        },
        value: 100,
        subvalues: [0, 0, 0]
    });

    $('#increaseSubvalueButton').click(function () {
        var gauge = $('#circularGaugeContainer').dxCircularGauge('instance');
        var subvals = gauge.subvalues();
        var rand = Math.floor(Math.random() * subvals.length);
        subvals[rand]++;
        var scaleEnd = gauge.option('scale.endValue');
        if (subvals[rand] == scaleEnd) {
            gauge.option({
                rangeContainer: { backgroundColor: 'red' }
            });
            $(this).attr('disabled', 'disabled');
        };
        gauge.subvalues(subvals);
    });
})