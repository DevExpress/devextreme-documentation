$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 8, 29, 00, 00, 00),
            endValue: new Date(2012, 8, 29, 24, 00, 00),
            placeholderHeight: 20
        },
        behavior: {
            snapToTicks: true
        }
    });

    $("#snapToTicksCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            behavior: { snapToTicks: this.checked }
        });
    });
});