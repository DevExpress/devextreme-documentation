$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            snapToTicks: false,
            allowSlidersSwap: false,
            callSelectedRangeChanged: 'onMoving'
        },
        onSelectedRangeChanged: function (e) {
            $('#selectionSpan').html('SelectedRange: [' +
            +e.startValue.toFixed(3) + ', ' + e.endValue.toFixed(3) + ']');
        }
    });
});

