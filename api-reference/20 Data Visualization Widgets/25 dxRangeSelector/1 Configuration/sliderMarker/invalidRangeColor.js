$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100,
            minRange: 10,
            maxRange: 20
        },
        selectedRange: {
            startValue: 60,
            endValue: 80
        },
        sliderMarker: {
            invalidRangeColor: 'darkred'
        }
    });
});