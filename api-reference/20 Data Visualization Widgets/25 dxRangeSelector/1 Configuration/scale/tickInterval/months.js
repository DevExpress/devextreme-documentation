$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2010, 0),
            endValue: new Date(2013, 0),
            tickInterval: { months: 3 }
        }
    });
});
