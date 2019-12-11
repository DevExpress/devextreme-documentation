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
        value: [new Date(2012, 3, 1), new Date(2012, 4, 1)]
    });
});