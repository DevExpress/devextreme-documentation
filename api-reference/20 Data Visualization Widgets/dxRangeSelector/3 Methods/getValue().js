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
        var selectedRange = rangeSelector.getValue();
        $('#selectionSpan').html('Selected range: [' +
                selectedRange[0].toFixed(3) + ', ' + selectedRange[1].toFixed(3) + ']');
    });
});