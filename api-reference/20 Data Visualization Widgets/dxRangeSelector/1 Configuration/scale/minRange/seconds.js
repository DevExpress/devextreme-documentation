$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12, 30, 0),
            endValue: new Date(2012, 2, 5, 12, 35, 0),
            minRange: { seconds: 30 }
        },
        value: [new Date(2012, 2, 5, 12, 32, 0), new Date(2012, 2, 5, 12, 32, 30)]
    });
});