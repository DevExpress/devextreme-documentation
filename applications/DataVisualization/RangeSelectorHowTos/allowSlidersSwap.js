$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 100
        }
    }).dxRangeSelector("instance");

    $("#сheckboxContainer").dxCheckBox({
        text: 'Allow the Sliders Swap',
        value: true,
        onValueChanged: function (e) {
            rangeSelector.option({
                behavior: { allowSlidersSwap: e.value }
            });
        }
    });
});