$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 2, 5),
            endValue: new Date(2012, 3, 10),
            maxRange: { days: 14 }
        },
        value: [new Date(2012, 2, 5), new Date(2012, 2, 19)]
    });
});