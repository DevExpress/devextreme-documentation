$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            snapToTicks: false,
            allowSlidersSwap: false,
            callValueChanged: 'onMoving'
        },
        onValueChanged: function (e) {
            $('#selectionSpan').html('SelectedRange: [' +
            +e.value[0].toFixed(3) + ', ' + e.value[1].toFixed(3) + ']');
        }
    });
});

