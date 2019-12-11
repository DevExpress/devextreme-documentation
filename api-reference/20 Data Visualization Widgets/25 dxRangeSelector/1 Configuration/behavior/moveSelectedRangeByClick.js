$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 8, 29, 00, 00, 00),
            endValue: new Date(2012, 8, 29, 24, 00, 00),
            placeholderHeight: 20
        }
    });

    $("#moveSelectedRangeByClickCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            behavior: { moveSelectedRangeByClick: this.checked }
        });
    });
});