$(function () {
    var rangeSelector = $("#rangeSelectorContainer").dxRangeSelector({
        scale: {
            startValue: new Date(2012, 8, 29, 00, 00, 00),
            endValue: new Date(2012, 8, 29, 24, 00, 00),
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