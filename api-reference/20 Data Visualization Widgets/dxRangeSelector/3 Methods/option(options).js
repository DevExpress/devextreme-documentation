$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: 0,
            endValue: 10,
            tickInterval: 1
        }
    });

    $("#minorTicksSlidersSwapCheckbox").change(function () {
        var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector("instance");
        rangeSelector.option({
            behavior: {
                allowSlidersSwap: this.checked
            },
            scale: {
                showMinorTicks: this.checked
            }
        });
    });
});