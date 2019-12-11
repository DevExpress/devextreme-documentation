$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10,
            tickInterval: 2,
            minorTickCount: 9
        }
    });
});