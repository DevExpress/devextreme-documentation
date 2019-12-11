$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12, 00),
            endValue: new Date(2012, 2, 5, 13, 00),
            minorTickInterval: { minutes: 2 }
        }
    });
});