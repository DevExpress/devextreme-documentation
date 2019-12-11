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
        var selectedRange = rangeSelector.getValue();
        $('#selectionSpan').html('Selected range: [' +
                selectedRange[0].toFixed(3) + ', ' + selectedRange[1].toFixed(3) + ']');
    });
});