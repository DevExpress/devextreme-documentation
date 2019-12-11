$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        behavior: {
            snapToTicks: false
        },
        scale: {
            startValue: new Date(2012, 2),
            endValue: new Date(2012, 6),
            maxRange: 'month'
        },
        selectedRange: {
            startValue: new Date(2012, 3, 1),
            endValue: new Date(2012, 4, 1)
        }
    });
});