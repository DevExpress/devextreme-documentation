$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'darkkhaki' },
        scale: {
            startValue: new Date(2012, 2, 5),
            endValue: new Date(2012, 2, 10),
            placeholderHeight: 20,
            useTicksAutoArrangement: true
        }
    });

    $("#useTicksAutoArrangementCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            scale: { useTicksAutoArrangement: this.checked }
        });
    });
});