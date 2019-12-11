$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5),
            endValue: new Date(2012, 2, 10),
            minorTickInterval: { hours: 4 }
        }
    });
});