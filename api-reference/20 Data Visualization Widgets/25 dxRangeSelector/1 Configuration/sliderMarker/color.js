$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1,
            minorTickInterval: 0.01
        },
        sliderMarker: {
            color: 'pink'
        }
    });
});