$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12, 30, 30, 0),
            endValue: new Date(2012, 2, 5, 12, 31, 30, 0),
            maxRange: { milliseconds: 10000 }
        },
        selectedRange: {
            startValue: new Date(2012, 2, 5, 12, 30, 40, 0),
            endValue: new Date(2012, 2, 5, 12, 30, 50, 0)
        }
    });
});