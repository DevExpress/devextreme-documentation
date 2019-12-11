$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 1
        },
        sliderMarker: {
            paddingLeftRight: 4
        }
    });

    $("#slider").dxSlider({
        min: 0,
        value: 4,
        max: 20,
        onValueChanged: function (e) {
            $('#sliderValue').html(e.value);
            var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
            rangeSelector.option("sliderMarker.paddingLeftRight", e.value);
        }
    });
})