$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            allowSlidersSwap: true
        }
    }).dxRangeSelector("instance");

    $("#checkBoxContainer").dxCheckBox({
        text: "allowSlidersSwap",
        value: true,
        onValueChanged: function (e) {
            rangeSelector.option('behavior.allowSlidersSwap', e.value);
            $('#value').html(" " + rangeSelector.option('behavior.allowSlidersSwap'));
        }
    });
});