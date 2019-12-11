$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1,
            label: { visible: true }
        }
    });

    $("#visibleLabelsCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            scale: {
                label: { visible: this.checked }
            }
        });
    });
});