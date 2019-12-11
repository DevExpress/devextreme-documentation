$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5),
            endValue: new Date(2012, 5, 10),
            marker: { visible: true }
        }
    });

    $("#visibleScaleMarkersCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            scale: {
                marker: { visible: this.checked }
            }
        });
    });
});