$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'lightgreen' },
        scale: {
            startValue: 0,
            endValue: 10
        }
    });

    $("#getSelectedRangeButton").click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        var selectedRange = rangeSelector.getSelectedRange();
        $('#selectionSpan').html('Selected range: [' +
                selectedRange.startValue.toFixed(3) + ', ' + selectedRange.endValue.toFixed(3) + ']');
    });
});