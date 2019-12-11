$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(0),
            endValue: new Date(1000),
            tickInterval: { milliseconds: 100 }
        }
    });
});
