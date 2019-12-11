$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        sliderMarker: {
            font: {
                color: 'chartreuse',
                weight: 700,
                size: 16
            }
        }
    });
});