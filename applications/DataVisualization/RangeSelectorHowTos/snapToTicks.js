$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 8, 29, 0, 0, 0),
            endValue: new Date(2012, 8, 29, 24, 0, 0),
            marker: { visible: false }
        }
    }).dxRangeSelector("instance");

    $("#сheckboxContainer").dxCheckBox({
        text: 'Snap the Sliders to Ticks',
        value: true,
        onValueChanged: function (e) {
            rangeSelector.option({
                behavior: { snapToTicks: e.value }
            });
        }
    });
});