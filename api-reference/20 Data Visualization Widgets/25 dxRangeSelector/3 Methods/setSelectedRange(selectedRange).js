var defaultRange = {
    startValue: 5,
    endValue: 8
};

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        selectedRange: defaultRange
    });

    $("#setDefaultRangeButton").click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        rangeSelector.setSelectedRange(defaultRange);
    });
});