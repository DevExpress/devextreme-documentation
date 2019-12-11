$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 4),
            endValue: new Date(2012, 3, 10),
            tickInterval: 'week'
        }
    });
});