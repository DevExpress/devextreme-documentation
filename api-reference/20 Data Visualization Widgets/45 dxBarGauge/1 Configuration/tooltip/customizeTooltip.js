$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: -50,
        endValue: 50,
        baseValue: 0,
        values: [-14, 14.833, -45.91, 24.2, 5],
        palette: 'Vintage',
        tooltip: {
            enabled: true,
            opacity: 0.7,
            customizeTooltip: function () {
                if (this.value > 0) {
                    return {
                        color: 'beige'
                    }
                }
            }
        }
    });
});