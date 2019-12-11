$(function () {
    $("#linearGaugeContainer").dxLinearGauge({
        rangeContainer: { backgroundColor: 'khaki' },
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: 31,
        subvalues: [34.5, 53, 12.34, 84, 73],
        subvalueIndicator: {
            color: 'goldenrod'
        },
        tooltip: {
            enabled: true,
            customizeTooltip: function () {
                if (this.value > 50) {
                    return {
                        color: 'bisque'
                    }
                }
            }
        }
    });
});