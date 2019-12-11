$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        selectedRangeColor: "#606060"
    });

    $("#colorBox").dxColorBox({
        value: "#606060",
        editAlphaChannel: true,
        onValueChanged: function (e) {
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("selectedRangeColor", e.value);
        }
    });
});