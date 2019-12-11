$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: {
            color: 'thistle'
        },
        scale: {
            startValue: new Date(2012, 2, 14, 11, 35, 25, 10),
            endValue: new Date(2012, 2, 15),
            placeholderHeight: 20,
            tickInterval: { hours: 2 },
            minorTickInterval: { hours: 1 },
            setTicksAtUnitBeginning: false,
            showCustomBoundaryTicks: true
        }
    });

    $("#showCustomBoundaryTicksCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            scale: { showCustomBoundaryTicks: this.checked }
        });
    });
});