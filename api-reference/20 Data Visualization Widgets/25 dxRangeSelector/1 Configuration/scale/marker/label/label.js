$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2010, 2, 5),
            endValue: new Date(2015, 3, 10),
            marker: {
                format: 'year'
            }
        }
    });
});