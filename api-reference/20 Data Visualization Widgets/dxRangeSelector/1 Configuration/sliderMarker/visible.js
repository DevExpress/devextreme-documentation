$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        sliderMarker: { visible: true }
    });

    $('#visibleMarkersCheckbox').change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            sliderMarker: { visible: this.checked }
        });
    });
})