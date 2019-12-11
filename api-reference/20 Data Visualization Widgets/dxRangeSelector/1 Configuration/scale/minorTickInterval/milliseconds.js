$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(0),
            endValue: new Date(1000),
            minorTickInterval: { milliseconds: 50 }
        }
    });
});
