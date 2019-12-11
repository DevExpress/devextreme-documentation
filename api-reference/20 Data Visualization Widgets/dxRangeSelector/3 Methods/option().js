$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            allowSlidersSwap: false
        }
    });

    $("#checkboxContainer").dxCheckBox({
        text: "Allow sliders swap",
        value: false,
        onValueChanged: function (e) {
            var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
            rangeSelector.option('behavior.allowSlidersSwap', e.value);
            $('#valueContainer').html(rangeSelector.option().behavior.allowSlidersSwap ? 'on' : 'off')
        }
    })
});