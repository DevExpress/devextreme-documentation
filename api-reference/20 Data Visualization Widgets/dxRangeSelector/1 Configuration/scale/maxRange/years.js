$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(1990, 0),
            endValue: new Date(2010, 0),
            showMinorTicks: false,
            maxRange: { years: 5 }
        },
        sliderMarker: {
            format: 'year'
        },
        value: [new Date(2004, 0), new Date(2007, 0)]
    });
});