$(function () {
    $("#rangeSelectorContainer").dxRangeSelector({
        background: { color: 'silver' },
        scale: {
            startValue: 0,
            endValue: 10
        },
        behavior: {
            snapToTicks: false,
            allowSlidersSwap: false
        }
    });

    $("#getSVG").click(function () {
        var rangeSelector = $('#rangeSelectorContainer').dxRangeSelector('instance');
        $('#widgetSVG').html(rangeSelector.svg());
    });
});