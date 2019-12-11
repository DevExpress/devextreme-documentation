$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5, 12, 30),
            endValue: new Date(2012, 2, 5, 14, 30),
            maxRange: { minutes: 10 }
        },
        value: [new Date(2012, 2, 5, 13, 0), new Date(2012, 2, 5, 13, 5)]
    });
});