$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'silver' },
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            snapToTicks: false,
            allowSlidersSwap: false
        }
    });

    $("#getSelectedRangeButton").click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        var selectedRange = rangeSelector.getSelectedRange();
        $('#selectionSpan').html('Selected range: [' +
                selectedRange.startValue.toFixed(3) + ', ' + selectedRange.endValue.toFixed(3) + ']');
    });
});