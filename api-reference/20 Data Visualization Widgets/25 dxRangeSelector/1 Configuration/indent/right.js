$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        indent: {
            right: 0
        }
    });

    $("#slider").dxSlider({
        min: 0,
        value: 3,
        max: 200,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("indent.right", e.value);
        }
    });
})