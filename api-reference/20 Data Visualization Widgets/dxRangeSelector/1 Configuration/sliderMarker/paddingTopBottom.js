$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        sliderMarker: {
            paddingTopBottom: 2
        }
    });

    $("#slider").dxSlider({
        min: 0,
        value: 2,
        max: 20,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("sliderMarker.paddingTopBottom", e.value);
        }
    });
})