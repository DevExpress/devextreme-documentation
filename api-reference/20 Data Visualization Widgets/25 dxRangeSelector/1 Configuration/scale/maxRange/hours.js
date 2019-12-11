$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12),
            endValue: new Date(2012, 2, 7, 12),
            maxRange: { hours: 12 }
        },
        selectedRange: {
            startValue: new Date(2012, 2, 5, 14),
            endValue: new Date(2012, 2, 6, 2)
        }
    });
});