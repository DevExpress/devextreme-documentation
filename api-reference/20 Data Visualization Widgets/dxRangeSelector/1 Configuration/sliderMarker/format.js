$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        sliderMarker: {
            format: {
                type: 'fixedPoint',
                precision: 2
            }
        }
    });
});