$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        indent: {
            left: 0,
            right: 0
        }
    });

    $("#sliderL").dxSlider({
        min: 0,
        value: 3,
        max: 200,
        onValueChanged: function (e) {
            $('#sliderLValue').html(e.value);
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("indent.left", e.value);
        }
    });

    $("#sliderR").dxSlider({
        min: 0,
        value: 3,
        max: 200,
        onValueChanged: function (e) {
            $('#sliderRValue').html(e.value);
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("indent.right", e.value);
        }
    });
})