$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: {
            color: 'gainsboro'
        },
        scale: {
            startValue: new Date(2012, 2, 14),
            endValue: new Date(2012, 2, 15),
            placeholderHeight: 20,
            tickInterval: { hours: 2 },
            minorTickInterval: { hours: 1 },
            showMinorTicks: true
        }
    });

    $("#showMinorTicksCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            scale: { showMinorTicks: this.checked }
        });
    });
});