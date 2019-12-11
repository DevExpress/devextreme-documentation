$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 0),
            endValue: new Date(2014, 0),
            minRange: { months: 3 }
        },
        sliderMarker: {
            format: 'monthAndYear'
        },
        value: [new Date(2012, 4), new Date(2012, 8)]
    });
});