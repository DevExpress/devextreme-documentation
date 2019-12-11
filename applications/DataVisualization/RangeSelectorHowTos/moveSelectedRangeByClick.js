$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100
        },
        value: [40, 60]
    }).dxRangeSelector("instance");

    $("#сheckboxContainer").dxCheckBox({
        text: 'Move the Selected Range by a Click',
        value: true,
        onValueChanged: function (e) {
            rangeSelector.option({
                behavior: { moveSelectedRangeByClick: e.value }
            });
        }
    });
});