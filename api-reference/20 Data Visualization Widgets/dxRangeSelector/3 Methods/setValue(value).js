var defaultRange = [5, 8];

$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        value: [5, 8]
    });

    $("#setDefaultRangeButton").click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        rangeSelector.setValue(defaultRange);
    });
});