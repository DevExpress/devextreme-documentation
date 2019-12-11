$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'floralwhite' },
        scale: {
            startValue: 0,
            endValue: 10,
            showMinorTicks: false
        },
        behavior: {
            snapToTicks: false
        },
        sliderHandle: {
            width: 3
        }
    });
});