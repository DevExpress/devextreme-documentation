$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: [40, 60]
    }).dxRangeSelector("instance");

    $("#сheckboxContainer").dxCheckBox({
        text: 'Enable the Manual Range Selection',
        value: true,
        onValueChanged: function (e) {
            rangeSelector.option({
                behavior: { manualRangeSelectionEnabled: e.value }
            });
        }
    });
});