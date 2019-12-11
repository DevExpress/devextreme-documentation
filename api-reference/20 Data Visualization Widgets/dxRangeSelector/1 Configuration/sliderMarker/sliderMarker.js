$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1,
            minorTickInterval: 0.01
        },
        sliderMarker: {
            format: {
                type: 'fixedPoint',
                precision: 2
            },
            color: 'dodgerblue',
            padding: 10
        }
    });
});