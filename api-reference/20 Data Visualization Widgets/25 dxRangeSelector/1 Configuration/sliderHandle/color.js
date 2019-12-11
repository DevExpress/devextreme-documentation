$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'greenyellow' },
        scale: {
            startValue: 0,
            endValue: 10,
            showMinorTicks: false
        },
        behavior: {
            snapToTicks: false
        },
        sliderHandle: {
            color: 'maroon'
        }
    });
});