$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12, 30, 0),
            endValue: new Date(2012, 2, 5, 12, 35, 0),
            maxRange: { seconds: 30 }
        },
        selectedRange: {
            startValue: new Date(2012, 2, 5, 12, 32, 0),
            endValue: new Date(2012, 2, 5, 12, 32, 30)
        }
    });
});